#!/bin/bash

# Vérifie que ffmpeg est installé
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg non trouvé. Installe avec: brew install ffmpeg"
    exit 1
fi

VIDEOS_DIR="/Users/zakharian_concept/Projets/rozidance/public/videos"
BACKUP_DIR="$VIDEOS_DIR/backup_original"

# Crée un dossier de backup
mkdir -p "$BACKUP_DIR"

echo "🎬 Recompression des vidéos avec qualité optimale..."
echo "📊 Paramètres: CRF=23 (haute qualité), preset=slow (meilleure compression)"
echo ""

# Compte les vidéos
TOTAL=$(find "$VIDEOS_DIR" -name "*.mp4" -not -path "*/backup_original/*" | wc -l)
COUNT=0

# Boucle sur toutes les vidéos
find "$VIDEOS_DIR" -name "*.mp4" -not -path "*/backup_original/*" | while read video; do
    COUNT=$((COUNT + 1))
    BASENAME=$(basename "$video")
    DIRNAME=$(dirname "$video")
    TEMP_FILE="${DIRNAME}/${BASENAME%.mp4}_temp.mp4"

    echo "[$COUNT/$TOTAL] Recompression: $BASENAME"
    echo "  Taille avant: $(du -h "$video" | cut -f1)"

    # Backup l'original
    cp "$video" "$BACKUP_DIR/${BASENAME%.mp4}_backup_$(date +%s).mp4"

    # Recompresse avec des paramètres optimisés
    ffmpeg -i "$video" \
        -c:v libx264 \
        -crf 23 \
        -preset slow \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        "$TEMP_FILE" \
        -loglevel error \
        -y

    # Remplace l'original
    if [ -f "$TEMP_FILE" ]; then
        mv "$TEMP_FILE" "$video"
        SIZE_AFTER=$(du -h "$video" | cut -f1)
        echo "  ✓ Taille après: $SIZE_AFTER"
    fi
    echo ""
done

echo "✅ Toutes les vidéos ont été recompressées!"
echo "📁 Les backups sont dans: $BACKUP_DIR"

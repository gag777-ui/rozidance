import type { Lang } from './utils';

type LegalCopy = {
  description: string;
  publisherTitle: string;
  publisherRole: string;
  country: string;
  email: string;
  phone: string;
  hostingTitle: string;
  hostingText: string;
  hostingCountry: string;
  intellectualPropertyTitle: string;
  intellectualProperty: string[];
  privacyTitle: string;
  privacyIntro: string;
  privacyRights: string;
  cookiesTitle: string;
  cookies: string;
  externalLinksTitle: string;
  externalLinks: string;
  applicableLawTitle: string;
  applicableLaw: string;
};

export const legalTranslations: Record<Lang, LegalCopy> = {
  fr: {
    description: 'Mentions légales du site Rozi Dance.',
    publisherTitle: 'Éditeur du site',
    publisherRole: 'Duo artistique — chant & danse arméniens',
    country: 'Belgique',
    email: 'E-mail',
    phone: 'Tél.',
    hostingTitle: 'Hébergement',
    hostingText: 'Ce site est hébergé par',
    hostingCountry: 'États-Unis',
    intellectualPropertyTitle: 'Propriété intellectuelle',
    intellectualProperty: [
      "L'ensemble du contenu de ce site (textes, photographies, vidéos, graphismes, logo) est la propriété exclusive de Rozi Dance ou de ses partenaires et est protégé par les lois belges et internationales relatives à la propriété intellectuelle.",
      'Toute reproduction, distribution, modification ou utilisation sans autorisation écrite préalable est strictement interdite.',
    ],
    privacyTitle: 'Protection des données personnelles',
    privacyIntro:
      "Ce site ne collecte aucune donnée personnelle via des formulaires. Les seules interactions possibles sont les liens de contact (e-mail, téléphone, réseaux sociaux) qui relèvent de votre initiative directe.",
    privacyRights:
      "Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679), vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant :",
    cookiesTitle: 'Cookies',
    cookies:
      "Ce site n'utilise pas de cookies à des fins de traçage ou de publicité. Des cookies techniques peuvent être déposés par l'hébergeur (Vercel) pour assurer le bon fonctionnement du site.",
    externalLinksTitle: 'Liens externes',
    externalLinks:
      'Ce site contient des liens vers des plateformes tierces (YouTube, Instagram). Rozi Dance ne peut être tenu responsable du contenu de ces sites externes ni de leur politique de confidentialité.',
    applicableLawTitle: 'Droit applicable',
    applicableLaw:
      "Le présent site est soumis au droit belge. Tout litige relatif à son utilisation relève de la compétence exclusive des tribunaux belges.",
  },
  en: {
    description: 'Legal notice for the Rozi Dance website.',
    publisherTitle: 'Website publisher',
    publisherRole: 'Artistic duo — Armenian singing & dance',
    country: 'Belgium',
    email: 'Email',
    phone: 'Tel.',
    hostingTitle: 'Hosting',
    hostingText: 'This website is hosted by',
    hostingCountry: 'United States',
    intellectualPropertyTitle: 'Intellectual property',
    intellectualProperty: [
      'All content on this website (texts, photographs, videos, graphics, logo) is the exclusive property of Rozi Dance or its partners and is protected by Belgian and international intellectual property laws.',
      'Any reproduction, distribution, modification or use without prior written permission is strictly prohibited.',
    ],
    privacyTitle: 'Personal data protection',
    privacyIntro:
      'This website does not collect any personal data through forms. The only possible interactions are contact links (email, telephone, social media), which are initiated directly by you.',
    privacyRights:
      'In accordance with the General Data Protection Regulation (GDPR — EU 2016/679), you have the right to access, rectify and erase your data by contacting:',
    cookiesTitle: 'Cookies',
    cookies:
      'This website does not use cookies for tracking or advertising purposes. Technical cookies may be placed by the hosting provider (Vercel) to ensure the proper functioning of the website.',
    externalLinksTitle: 'External links',
    externalLinks:
      'This website contains links to third-party platforms (YouTube, Instagram). Rozi Dance cannot be held responsible for the content of these external websites or their privacy policies.',
    applicableLawTitle: 'Applicable law',
    applicableLaw:
      'This website is governed by Belgian law. Any dispute relating to its use falls under the exclusive jurisdiction of the Belgian courts.',
  },
  nl: {
    description: 'Juridische vermeldingen van de website Rozi Dance.',
    publisherTitle: 'Uitgever van de website',
    publisherRole: 'Artistiek duo — Armeense zang & dans',
    country: 'België',
    email: 'E-mail',
    phone: 'Tel.',
    hostingTitle: 'Hosting',
    hostingText: 'Deze website wordt gehost door',
    hostingCountry: 'Verenigde Staten',
    intellectualPropertyTitle: 'Intellectuele eigendom',
    intellectualProperty: [
      'De volledige inhoud van deze website (teksten, foto’s, video’s, grafische elementen, logo) is de exclusieve eigendom van Rozi Dance of haar partners en wordt beschermd door de Belgische en internationale wetgeving inzake intellectuele eigendom.',
      'Elke reproductie, verspreiding, wijziging of gebruik zonder voorafgaande schriftelijke toestemming is strikt verboden.',
    ],
    privacyTitle: 'Bescherming van persoonsgegevens',
    privacyIntro:
      'Deze website verzamelt geen persoonsgegevens via formulieren. De enige mogelijke interacties zijn contactlinks (e-mail, telefoon, sociale media), die rechtstreeks op uw initiatief plaatsvinden.',
    privacyRights:
      'Overeenkomstig de Algemene Verordening Gegevensbescherming (AVG — EU 2016/679) hebt u het recht op inzage, rectificatie en verwijdering van uw gegevens door contact op te nemen met:',
    cookiesTitle: 'Cookies',
    cookies:
      'Deze website gebruikt geen cookies voor tracking- of reclamedoeleinden. De hostingprovider (Vercel) kan technische cookies plaatsen om de goede werking van de website te garanderen.',
    externalLinksTitle: 'Externe links',
    externalLinks:
      'Deze website bevat links naar platformen van derden (YouTube, Instagram). Rozi Dance kan niet aansprakelijk worden gesteld voor de inhoud van deze externe websites of hun privacybeleid.',
    applicableLawTitle: 'Toepasselijk recht',
    applicableLaw:
      'Deze website valt onder het Belgische recht. Elk geschil met betrekking tot het gebruik ervan valt onder de exclusieve bevoegdheid van de Belgische rechtbanken.',
  },
  ru: {
    description: 'Правовая информация о сайте Rozi Dance.',
    publisherTitle: 'Издатель сайта',
    publisherRole: 'Артистический дуэт — армянское пение и танец',
    country: 'Бельгия',
    email: 'Эл. почта',
    phone: 'Тел.',
    hostingTitle: 'Хостинг',
    hostingText: 'Хостинг этого сайта предоставляет',
    hostingCountry: 'США',
    intellectualPropertyTitle: 'Интеллектуальная собственность',
    intellectualProperty: [
      'Все содержимое этого сайта (тексты, фотографии, видео, графика, логотип) является исключительной собственностью Rozi Dance или ее партнеров и защищено законодательством Бельгии и международным законодательством об интеллектуальной собственности.',
      'Любое воспроизведение, распространение, изменение или использование без предварительного письменного разрешения строго запрещено.',
    ],
    privacyTitle: 'Защита персональных данных',
    privacyIntro:
      'Этот сайт не собирает персональные данные через формы. Единственные возможные взаимодействия — это контактные ссылки (электронная почта, телефон, социальные сети), которыми вы пользуетесь по собственной инициативе.',
    privacyRights:
      'В соответствии с Общим регламентом по защите данных (GDPR — ЕС 2016/679) вы имеете право на доступ, исправление и удаление своих данных, обратившись по адресу:',
    cookiesTitle: 'Файлы cookie',
    cookies:
      'Этот сайт не использует файлы cookie для отслеживания или рекламы. Хостинг-провайдер (Vercel) может устанавливать технические файлы cookie для обеспечения надлежащей работы сайта.',
    externalLinksTitle: 'Внешние ссылки',
    externalLinks:
      'Этот сайт содержит ссылки на сторонние платформы (YouTube, Instagram). Rozi Dance не несет ответственности за содержимое этих внешних сайтов или их политику конфиденциальности.',
    applicableLawTitle: 'Применимое право',
    applicableLaw:
      'Настоящий сайт регулируется законодательством Бельгии. Любой спор, связанный с его использованием, относится к исключительной юрисдикции бельгийских судов.',
  },
  de: {
    description: 'Impressum der Website Rozi Dance.',
    publisherTitle: 'Herausgeber der Website',
    publisherRole: 'Künstlerisches Duo — armenischer Gesang & Tanz',
    country: 'Belgien',
    email: 'E-Mail',
    phone: 'Tel.',
    hostingTitle: 'Hosting',
    hostingText: 'Diese Website wird gehostet von',
    hostingCountry: 'Vereinigte Staaten',
    intellectualPropertyTitle: 'Geistiges Eigentum',
    intellectualProperty: [
      'Der gesamte Inhalt dieser Website (Texte, Fotografien, Videos, Grafiken, Logo) ist das ausschließliche Eigentum von Rozi Dance oder seinen Partnern und durch belgische und internationale Gesetze zum Schutz des geistigen Eigentums geschützt.',
      'Jegliche Vervielfältigung, Verbreitung, Änderung oder Nutzung ohne vorherige schriftliche Genehmigung ist strengstens untersagt.',
    ],
    privacyTitle: 'Schutz personenbezogener Daten',
    privacyIntro:
      'Diese Website erhebt keine personenbezogenen Daten über Formulare. Die einzigen möglichen Interaktionen sind Kontaktlinks (E-Mail, Telefon, soziale Medien), die unmittelbar auf Ihre Initiative zurückgehen.',
    privacyRights:
      'Gemäß der Datenschutz-Grundverordnung (DSGVO — EU 2016/679) haben Sie das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten, indem Sie sich an folgende Adresse wenden:',
    cookiesTitle: 'Cookies',
    cookies:
      'Diese Website verwendet keine Cookies zu Tracking- oder Werbezwecken. Der Hosting-Anbieter (Vercel) kann technische Cookies setzen, um den ordnungsgemäßen Betrieb der Website sicherzustellen.',
    externalLinksTitle: 'Externe Links',
    externalLinks:
      'Diese Website enthält Links zu Plattformen Dritter (YouTube, Instagram). Rozi Dance kann weder für die Inhalte dieser externen Websites noch für deren Datenschutzrichtlinien verantwortlich gemacht werden.',
    applicableLawTitle: 'Anwendbares Recht',
    applicableLaw:
      'Diese Website unterliegt belgischem Recht. Für alle Streitigkeiten im Zusammenhang mit ihrer Nutzung sind ausschließlich die belgischen Gerichte zuständig.',
  },
  es: {
    description: 'Aviso legal del sitio web Rozi Dance.',
    publisherTitle: 'Editor del sitio web',
    publisherRole: 'Dúo artístico — canto y danza armenios',
    country: 'Bélgica',
    email: 'Correo electrónico',
    phone: 'Tel.',
    hostingTitle: 'Alojamiento',
    hostingText: 'Este sitio web está alojado por',
    hostingCountry: 'Estados Unidos',
    intellectualPropertyTitle: 'Propiedad intelectual',
    intellectualProperty: [
      'Todo el contenido de este sitio web (textos, fotografías, vídeos, elementos gráficos, logotipo) es propiedad exclusiva de Rozi Dance o de sus colaboradores y está protegido por las leyes belgas e internacionales relativas a la propiedad intelectual.',
      'Queda estrictamente prohibida cualquier reproducción, distribución, modificación o uso sin autorización previa por escrito.',
    ],
    privacyTitle: 'Protección de datos personales',
    privacyIntro:
      'Este sitio web no recopila datos personales mediante formularios. Las únicas interacciones posibles son los enlaces de contacto (correo electrónico, teléfono, redes sociales), que se realizan directamente por iniciativa del usuario.',
    privacyRights:
      'De conformidad con el Reglamento General de Protección de Datos (RGPD — UE 2016/679), usted tiene derecho a acceder, rectificar y suprimir sus datos poniéndose en contacto con:',
    cookiesTitle: 'Cookies',
    cookies:
      'Este sitio web no utiliza cookies con fines de seguimiento o publicidad. El proveedor de alojamiento (Vercel) puede instalar cookies técnicas para garantizar el correcto funcionamiento del sitio.',
    externalLinksTitle: 'Enlaces externos',
    externalLinks:
      'Este sitio web contiene enlaces a plataformas de terceros (YouTube, Instagram). Rozi Dance no se hace responsable del contenido de estos sitios externos ni de sus políticas de privacidad.',
    applicableLawTitle: 'Legislación aplicable',
    applicableLaw:
      'Este sitio web se rige por la legislación belga. Cualquier litigio relacionado con su uso será competencia exclusiva de los tribunales belgas.',
  },
  it: {
    description: 'Avviso legale del sito web Rozi Dance.',
    publisherTitle: 'Editore del sito web',
    publisherRole: 'Duo artistico — canto e danza armeni',
    country: 'Belgio',
    email: 'E-mail',
    phone: 'Tel.',
    hostingTitle: 'Hosting',
    hostingText: 'Questo sito web è ospitato da',
    hostingCountry: 'Stati Uniti',
    intellectualPropertyTitle: 'Proprietà intellettuale',
    intellectualProperty: [
      'Tutti i contenuti di questo sito web (testi, fotografie, video, elementi grafici, logo) sono di proprietà esclusiva di Rozi Dance o dei suoi partner e sono protetti dalle leggi belghe e internazionali in materia di proprietà intellettuale.',
      'Qualsiasi riproduzione, distribuzione, modifica o utilizzo senza previa autorizzazione scritta è severamente vietato.',
    ],
    privacyTitle: 'Protezione dei dati personali',
    privacyIntro:
      'Questo sito web non raccoglie dati personali tramite moduli. Le uniche interazioni possibili sono i link di contatto (e-mail, telefono, social network), utilizzati direttamente su iniziativa dell’utente.',
    privacyRights:
      'Ai sensi del Regolamento generale sulla protezione dei dati (GDPR — UE 2016/679), l’utente ha il diritto di accedere, rettificare e cancellare i propri dati contattando:',
    cookiesTitle: 'Cookie',
    cookies:
      'Questo sito web non utilizza cookie a fini di tracciamento o pubblicità. Il provider di hosting (Vercel) può installare cookie tecnici per garantire il corretto funzionamento del sito.',
    externalLinksTitle: 'Link esterni',
    externalLinks:
      'Questo sito web contiene link a piattaforme di terze parti (YouTube, Instagram). Rozi Dance non può essere ritenuta responsabile dei contenuti di questi siti esterni né delle loro informative sulla privacy.',
    applicableLawTitle: 'Legge applicabile',
    applicableLaw:
      'Questo sito web è soggetto alla legge belga. Qualsiasi controversia relativa al suo utilizzo è soggetta alla giurisdizione esclusiva dei tribunali belgi.',
  },
};

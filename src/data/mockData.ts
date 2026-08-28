import { ScreenshotItem, FeatureItem, ApkRelease, FaqItem, StreamChannel } from '../types';

export const SCREENSHOT_SLIDES: ScreenshotItem[] = [
  {
    id: 'slide-01',
    title: 'Reproductor Modo Cine HUD 16:9',
    subtitle: 'Controles Táctiles Flotantes de Brillo y Volumen',
    category: 'hud',
    description: 'Experiencia inmersiva con controles HUD táctiles flotantes de Brillo y Volumen en pantalla, carrusel horizontal inferior para cambiar de canal sin cortar el video y bloqueo contra toques accidentales.',
    badges: ['Sliders HUD de Brillo & Volumen', 'Selector Rápido de Canales', 'Bloqueo Táctil Discreto'],
    imageUrl: '/fluxplay-01.jpg',
    highlightText: 'Control de gestos vertical milimétrico para brillo (izq.) y volumen (der.) en vivo.'
  },
  {
    id: 'slide-02',
    title: 'Gestor de Listas M3U y Categorías',
    subtitle: 'Biblioteca Inteligente con Filtrado Avanzado',
    category: 'playlists',
    description: 'Importa listas M3U por enlace o archivo local. Organiza y filtra tus favoritos clasificados por su lista de origen, con búsqueda instantánea y badges de formato en vivo.',
    badges: ['M3U • HLS (.m3u8) • DASH', 'Favoritos por Lista de Origen', 'Búsqueda y Filtros Rápidos'],
    imageUrl: '/fluxplay-02.jpg',
    highlightText: 'Agrupación automática por país, categoría de contenido y estado de transmisión.'
  },
  {
    id: 'slide-03',
    title: 'Ventana Flotante y Multitarea PiP',
    subtitle: 'Picture-in-Picture & Minireproductor Integrado',
    category: 'pip',
    description: 'Sigue viendo la transmisión en ventana flotante sobre cualquier app en segundo plano, o navega libremente por la app con el minireproductor interactivo sincronizado.',
    badges: ['Ventana Flotante PiP', 'Minireproductor Integrado', 'Cero Cortes de Audio'],
    imageUrl: '/fluxplay-03.jpg',
    highlightText: 'Transición instantánea al salir al escritorio sin cortes en el flujo de video y audio.'
  },
  {
    id: 'slide-04',
    title: 'Listas M3U y Favoritos por Origen',
    subtitle: 'Biblioteca Inteligente y Organización Avanzada',
    category: 'playlists',
    description: 'Importa listas M3U por enlace o archivo local. Organiza y filtra tus favoritos clasificados por su lista de origen, con búsqueda instantánea y badges de formato en vivo.',
    badges: ['M3U • HLS (.m3u8) • DASH', 'Favoritos por Lista de Origen', 'Búsqueda y Filtros Rápidos'],
    imageUrl: '/fluxplay-04.jpg',
    highlightText: 'Clasificación automática por proveedor y etiquetas de origen integradas.'
  },
  {
    id: 'slide-05',
    title: 'Ventana Flotante y Minireproductor',
    subtitle: 'Multitarea PiP y Reproducción en Segundo Plano',
    category: 'pip',
    description: 'Sigue viendo la transmisión en ventana flotante sobre cualquier app en segundo plano, o navega libremente por la app con el minireproductor interactivo sincronizado.',
    badges: ['Ventana Flotante PiP', 'Minireproductor Integrado', 'Sincronización Automática'],
    imageUrl: '/fluxplay-05.jpg',
    highlightText: 'Control total de reproducción, volumen y pantalla completa desde el minireproductor.'
  },
  {
    id: 'slide-06',
    title: 'Monitoreo de Estado y Resolución en Vivo',
    subtitle: 'Detección Automática de Códecs y Caídas',
    category: 'playlists',
    description: 'Visualiza la resolución exacta (1080p, 720p, 4K), tipo de flujo (HLS m3u8, TS, MPD) y detección inteligente de estado (Online / Caído) con un solo toque.',
    badges: ['Indicador de Flujo HLS', 'Detección de Caídas', 'Selector de Calidad Automática'],
    imageUrl: '/fluxplay-06.jpg',
    highlightText: 'Etiquetas de estado en tiempo real para saber qué enlaces están operativos al instante.'
  },
  {
    id: 'slide-07',
    title: 'Guía EPG y Programación en Tiempo Real',
    subtitle: 'Parrilla Horaria XMLTV con Recordatorios',
    category: 'playlists',
    description: 'Guía electrónica de programas (EPG) sincronizada con información detallada de emisiones en curso, próximos estrenos y temporizador de alertas.',
    badges: ['Sincronización XMLTV', 'Parrilla Horaria', 'Detalle de Programas'],
    imageUrl: '/fluxplay-07.jpg',
    highlightText: 'Exploración fluida de la guía de canales con carga anticipada de programación.'
  },
  {
    id: 'slide-08',
    title: 'Ajustes Avanzados & Motor de Renderizado',
    subtitle: 'Personalización Extrema y Modos de Búfer',
    category: 'engine',
    description: 'Configuración detallada de túnel de audio, passthrough surround 5.1/7.1, relación de aspecto dinámica (16:9, 4:3, Zoom, Ajustar) y gestión de caché en memoria.',
    badges: ['Relación de Aspecto Variable', 'Passthrough Audio 5.1/7.1', 'Caché Ultrarrápida'],
    imageUrl: '/fluxplay-08.jpg',
    highlightText: 'Control total sobre el pipeline de decodificación y optimización para cada dispositivo.'
  },
  {
    id: 'slide-09',
    title: 'Grabación de Emisiones & Catch-Up TV',
    subtitle: 'Timeshift y Gestión de Grabaciones en DVR',
    category: 'engine',
    description: 'Programa grabaciones de tus eventos en vivo y accede al historial Catch-Up para reproducir transmisiones emitidas en las últimas 72 horas sin cortes.',
    badges: ['Grabación DVR Programada', 'Timeshift Retroactivo', 'Almacenamiento Local/SD'],
    imageUrl: '/fluxplay-09.jpg',
    highlightText: 'Captura transmisiones completas en segundo plano con compresión optimizada.'
  },
  {
    id: 'slide-10',
    title: 'Personalización Avanzada y Perfiles',
    subtitle: 'Temas OLED, Atajos y Ajustes a Medida',
    category: 'engine',
    description: 'Ajusta la paleta de color, estilo de navegación, perfiles de búfer para conexiones lentas y atajos de teclado o mando a distancia para Android TV.',
    badges: ['Modo Puro OLED', 'Búfer Dinámico Adaptativo', 'Atajos Mando a Distancia'],
    imageUrl: '/fluxplay-010.jpg',
    highlightText: 'Configuración granular del comportamiento de la app según tu dispositivo y pantalla.'
  }
];

export const KEY_FEATURES: FeatureItem[] = [
  {
    id: 'feat-engine',
    icon: 'Cpu',
    title: 'Motor 4K Nexus Streaming [v7.4]',
    tagline: 'Decodificación Asíncrona por Hardware',
    description: 'Desarrollado sobre MediaCodec nativo para renderizar video Ultra HD 4K a 60 FPS con un consumo de batería un 45% menor que reproductores convencionales.',
    badge: 'Hardware Boost',
    details: [
      'Aceleración GPU directa (Snapdragon / Dimensity / Mali)',
      'Soporte nativo HEVC/H.265, AV1, VP9, H.264 y MPEG-TS',
      'Búfer anti-congelamiento con auto-recuperación de paquetes caídos',
      'Tiempo de carga de canal menor a 800ms',
      'Reconexión y reintento automático ante microcortes de señal'
    ],
    gradient: 'from-lime-500/20 via-emerald-500/10 to-transparent'
  },
  {
    id: 'feat-hud',
    icon: 'Sliders',
    title: 'Modo Cine HUD & Gestos Táctiles',
    tagline: 'Control Intuitivo sin Pausar la Transmisión',
    description: 'Desliza el dedo en el lateral izquierdo para graduar el brillo y en el derecho para el volumen. Cambia de canal con el carrusel flotante inferior sin interrumpir la reproducción.',
    badge: 'UX Galardonada',
    details: [
      'Controles flotantes translúcidos estilo HUD espacial',
      'Carrusel inferior con miniatura y nombre de canal',
      'Bloqueo táctil de seguridad contra pulsaciones no deseadas',
      'Aspect ratio dinámico (16:9, 4:3, 21:9, Zoom y Ajuste)',
      'Historial de canales vistos recientemente para acceso rápido'
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  },
  {
    id: 'feat-playlists',
    icon: 'ListFilter',
    title: 'Gestor de Listas M3U y Favoritos',
    tagline: 'Organización por Origen y Categoría',
    description: 'Carga listas remotas vía URL (HTTP/HTTPS) o archivos locales .m3u, .m3u8, .xspf y .json. Tus favoritos se conservan ordenados por lista de origen.',
    badge: 'Multi-Formato',
    details: [
      'Soporte M3U Plus con logos, grupos y nombres EPG',
      'Filtro instantáneo por país, deportes, cine y noticias',
      'Detección automática de enlaces caídos con badge de alerta',
      'Sincronización y respaldo rápido de listas y favoritos'
    ],
    gradient: 'from-indigo-500/20 via-purple-500/10 to-transparent'
  },
  {
    id: 'feat-pip',
    icon: 'PictureInPicture2',
    title: 'Picture-in-Picture & Multitarea',
    tagline: 'Tu Streaming Siempre Visible',
    description: 'Sigue tus partidos en vivo o noticias mientras respondes mensajes, consultas redes sociales o navegas por la biblioteca de canales.',
    badge: 'Modo Flotante',
    details: [
      'Ventana PiP redimensionable con controles integrados',
      'Modo solo audio en segundo plano con pantalla apagada',
      'Minireproductor sincronizado en la parte inferior de la app',
      'Cero interrupción al alternar entre aplicaciones'
    ],
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent'
  },
  {
    id: 'feat-predictive-search',
    icon: 'Search',
    title: 'Búsqueda Predictiva Flotante',
    tagline: 'Acceso Instantáneo en la Pestaña de Favoritos',
    description: 'Encuentra cualquier canal favorito al instante con la barra de búsqueda flotante predictiva. Filtra en tiempo real a medida que escribes con sugerencias inteligentes sin recargar la lista.',
    badge: 'Favoritos Pro',
    details: [
      'Búsqueda predictiva flotante integrada en la pestaña de Favoritos',
      'Indexación en memoria ultra rápida con respuesta en menos de 50ms',
      'Filtrado por nombre de canal, país, categoría o etiquetas EPG',
      'Acceso directo e instantáneo a tus transmisiones frecuentes'
    ],
    gradient: 'from-fuchsia-500/20 via-purple-500/10 to-transparent'
  },
  {
    id: 'feat-devices',
    icon: 'Smartphone',
    title: '100% Optimizado para Android',
    tagline: 'Experiencia Fluida en Smartphones y Tablets',
    description: 'Interfaz responsiva diseñada para una navegación táctil precisa, rendimiento ultrarrápido y consumo eficiente de batería.',
    badge: 'Universal',
    details: [
      'Navegación táctil intuitiva optimizada para gestos',
      'Modo pantalla completa para smartphones y tablets',
      'Diseño ultra ligero: instalador de apenas ~32 MB',
      'Totalmente libre de anuncios invasivos y rastreadores'
    ],
    gradient: 'from-lime-500/20 via-teal-500/10 to-transparent'
  }
];

export const APK_RELEASES: ApkRelease[] = [
  {
    version: 'v2.2 Pro',
    releaseDate: 'Compilación Oficial Certificada',
    fileSize: '32 MB',
    architecture: 'Universal (arm64-v8a • armeabi-v7a • x86_64)',
    minAndroid: 'Android 7.0 a Android 15 (Smartphones y Tablets)',
    sha256: '9f8e4b7c2a1e8d6f5a3b2c1e0d9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f',
    downloadCount: '',
    isLatest: true,
    type: 'universal',
    label: 'Paquete Oficial Todo-en-Uno para Móviles y Tablets',
    changelog: [
      'Nuevo Nexus Streaming Engine 7.4 con 4K 60FPS a 12500 kbps por hardware',
      'Modo Cine HUD 16:9 con sliders táctiles de respuesta milimétrica',
      'Soporte acelerado para listas M3U/M3U8 de gran tamaño (+30,000 canales)',
      'Modo Picture-in-Picture (PiP) flotante y minireproductor sincronizado',
      'Compatibilidad total certificada con Android 7.0 hasta Android 15'
    ]
  }
];

export const DEMO_CHANNELS: StreamChannel[] = [
  {
    id: 'ch-01',
    name: 'GALACTIC GRAND PRIX (4K Live)',
    category: 'Deportes / Acción',
    resolution: '3840x2160 (4K)',
    fps: 60,
    bitrate: '12500 kbps',
    audioCodec: 'Dolby Digital 5.1',
    videoCodec: 'HEVC / H.265 Hardware',
    thumbnail: '/img_cinema_player_hud.jpg',
    description: 'Transmisión en directo en circuito Neo-Tokyo con telemetría en tiempo real y audio envolvente.',
    duration: 'EN VIVO • 00:42:15'
  },
  {
    id: 'ch-02',
    name: 'NEBULA DOCS HD',
    category: 'Documentales',
    resolution: '1920x1080 (FHD)',
    fps: 60,
    bitrate: '6800 kbps',
    audioCodec: 'AAC Stereo',
    videoCodec: 'H.264 High Profile',
    thumbnail: '/img_futuristic_favorites_m3u.jpg',
    description: 'Exploraciones cósmicas y documentales científicos en ultra alta definición sin compresión.',
    duration: 'EN VIVO • 01:15:30'
  },
  {
    id: 'ch-03',
    name: 'ASTRO SPORTS LIVE',
    category: 'Deportes',
    resolution: '1920x1080 (60 FPS)',
    fps: 60,
    bitrate: '8500 kbps',
    audioCodec: 'Dolby Digital Plus',
    videoCodec: 'HEVC / MediaCodec',
    thumbnail: '/img_onboarding_streaming.jpg',
    description: 'Partidos de fútbol, Fórmula 1 y torneos internacionales con perfil de ultra baja latencia (<1s).',
    duration: 'EN VIVO • MIN 72'
  },
  {
    id: 'ch-04',
    name: 'SPACE NEWS 24/7',
    category: 'Noticias',
    resolution: '1920x1080 (HD)',
    fps: 30,
    bitrate: '4500 kbps',
    audioCodec: 'AAC Enhanced',
    videoCodec: 'H.264',
    thumbnail: '/img_entertainment_tv_center.jpg',
    description: 'Cobertura informativa global continúa con actualización de cintillo de noticias en vivo.',
    duration: 'EN VIVO • 24 Horas'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'general',
    question: '¿Qué es FluxPlay IPTV y qué incluye el APK?',
    answer: 'FluxPlay IPTV es un reproductor multimedia avanzado para Android diseñado para reproducir listas de canales en formatos M3U, M3U8, DASH y XSPF. Es un reproductor de código optimizado: no incluye listas predeterminadas ni canales con copyright, permitiéndote cargar de forma privada tus propias fuentes de transmisión con la máxima calidad y fluidez.'
  },
  {
    category: 'lists',
    question: '¿Cómo puedo importar mi lista de canales M3U o M3U8?',
    answer: 'Es muy sencillo: abre FluxPlay en tu dispositivo Android, dirígete al botón con el icono "+" en la pantalla principal o ve a Ajustes > Añadir Lista. Puedes pegar la URL remota de tu proveedor o seleccionar un archivo .m3u/.m3u8 descargado en la memoria de tu teléfono o TV.'
  },
  {
    category: 'playback',
    question: '¿Cómo activo la aceleración por Hardware (MediaCodec) 4K 60FPS?',
    answer: 'La aceleración por hardware viene activada de forma predeterminada mediante nuestro Nexus Streaming Engine. Si tu dispositivo lo soporta, verás el badge verde "HW ACTIVO" en el reproductor. Puedes cambiar entre decodificación por Hardware y Software en Ajustes > Motor de Reproducción.'
  },
  {
    category: 'playback',
    question: '¿Qué hago si un canal sufre de congelamientos o cortes periódicos?',
    answer: 'FluxPlay incluye un perfil de "Búfer Inteligente Anti-Cortes" ajustable de 2 a 15 segundos en Ajustes de Video. Además, puedes activar el modo de reconexión automática instantánea ante pérdidas de paquetes en redes WiFi inestables.'
  },
  {
    category: 'general',
    question: '¿Cómo instalo el archivo APK en mi dispositivo Android?',
    answer: 'Descarga el APK oficial directamente desde este sitio web. Abre el archivo en tu dispositivo; si es la primera vez, el sistema te pedirá habilitar "Instalar aplicaciones de fuentes desconocidas" para tu navegador o explorador de archivos. Confirma y pulsa en "Instalar".'
  }
];

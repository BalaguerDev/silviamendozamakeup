export const courseList = [
    {
        titleCard: "Cursos de belleza intensivos",
        titlePage: "Cursos intensivos de automaquillaje en Barcelona",
        subtitle: "Domina el arte del automaquillaje en nuestro tallere exclusivos",
        description: `
        Únete a nuestros talleres exclusivos de automaquillaje, donde aprenderás de la mano de profesionales del maquillaje.
        Diseñados tanto para principiantes como para quienes desean perfeccionar su técnica, estos talleres te ofrecerán las herramientas necesarias 
        para crear looks espectaculares. Además, cada sesión está pensada para disfrutar en un ambiente cercano y práctico.`,
        imageSrc: "/images/homepage/courses/curso-de-maquillaje.webp",
        link: "/cursos-intensivos-maquillaje-barcelona",
        isStatic: true, 
    },
    {
        titleCard: "Curso de automaquillaje",
        titlePage: "Curso de Automaquillaje en Barcelona",
        subtitle: "Realza tu belleza natural y aprende a mejorar tu automaquillaje",
        description: "Si quieres aprender a maquillarte de forma sencilla con tus productos acude a una clase de automaquillaje donde aprenderás las técnicas básicas para realizar un maquillaje efecto 'buena cara' para el día a día, un maquillaje de noche, o cualquier maquillaje que quieras aprender. Si quieres conocer todos los trucos para llevar a cabo un maquillaje profesional e impecable este curso es para ti.",
        whatYouWillLearn: [
            "Preparación de la piel y elección de los productos adecuados.",
            "Técnicas de aplicación de base, corrector y polvos.",
            "Maquillaje de ojos para diferentes formas y colores.",
            "Delineado y pestañas postizas.",
            "Maquillaje de labios y contouring.",
        ],
        durationPrice: [
            {
                type: "PRIVADO",
                options: [
                    { duration: "1 hora", price: "42,35€" },
                    { duration: "2 horas", price: "72,60€" },
                    { duration: "BONO 3 CLASES DE 1H (3 días/3 looks)", price: "108,90€ - Regalo: Análisis morfológico previo" }
                ]
            },
            {
            type: "2 PERSONAS",
                options: [
                    { duration: "2 horas de clase", price: "65,35€/persona" }
                ]
            },
            {
                type: "3 PERSONAS",
                options: [
                    { duration: "2,5 horas de clase", price: "60,50€/persona" }
                ]
            }
        ],
        aditionalInfo: [
            "Incluye: Guía de automaquillaje, guía de brochas y guía del ritual del cuidado facial.",
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
            "10% de descuento en los productos de maquillaje de nuestra tienda para utilizar el mismo día del curso.",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-maquillaje.webp",
        link: "/curso-de-automaquillaje-en-barcelona",
    },
    {
        titleCard: "Curso de autopeinado",
        titlePage: "Curso de Autopeinado en Barcelona",
        subtitle: "Sácale partido a tu cabello con mis autopeinados",
        description: "Descubre el arte del autopeinado con nuestras clases personalizadas. Después de evaluar tu tipo de cabello, estilo personal y el tiempo disponible para peinarte, te enseñaré qué herramientas y productos necesitas, así como cómo utilizarlos para lograr peinados increíbles.",
        whatYouWillLearn: [
            "A realizar un peinado paso a paso",
            "A colocar correctamente horquillas, gomas y todo el material necesario",
            "A usar la plancha o tenacilla correctamente y de forma sencilla",
        ],
        durationPrice: [
            {
                type: "PRIVADO",
                options: [
                    { duration: "1 hora",price: "42,35€" },
                    { duration: "2 horas", price: "72,60€" },
                ]
            },
            {
            type: "2 PERSONAS",
                options: [
                    { duration: "2 horas de clase", price: "65,35€/persona" }
                ]
            },
            {
                type: "3 PERSONAS",
                options: [
                    { duration: "2,5 horas de clase", price: "60,50€/persona" }
                ]
            }
        ],
        aditionalInfo: [
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-peinado-en-barcelona.webp",
        link: "/cursos-de-autopeinado-y-recogidos",
    },
    {
        titleCard: "Bono invierte en ti",
        titlePage: "Bono  maquillaje y peluqueria pensando en ti",
        subtitle: "Piensa en ti en este bono de belleza y cuidado personal",
        description: "Nuestra imagen es importante, pero más importante es darnos un espacio para nosotras, para descansar, para aprender y para conectar. Este bono está pensado para esas personas cuyo ritmo de vida va casi más rápido que ellas y necesitan un espacio seguro, tranquilo y calmado donde darse un respiro y dedicarse un tiempo para si mismas. Tendrás todo el 2025 para completar todos los servicios y tendremos línea directa por Whatsapp para ir resolviendo tus dudas.",
        whatYouWillLearn: [ ],
        include: [
            "2 clases automaquillaje (1h + 1h o 2h)",
            "2 clases autopeinado (1h + 1h o 2h)",
            "Pack de 9 brochas",
            "1 año de caducidad",
            "Incluye guía de automaquillaje, guía de brochas y guía de la rutina de cuidado facial.",
            "Regalo: análisis morfológico. Descubre qué tipo de rostro tienes antes de empezar las formaciones para que sean 100% personalizadas.",
        ],
        durationPrice: [
            {
                type: "PRIVADO",
                options: [
                    { duration: "1 hora", price: "42,35€" },
                    { duration: "2 horas", price: "72,60€" },
                ]
            },
            {
                type: "2 PERSONAS",
                options: [
                    { duration: "2 horas de clase", price: "65,35€/persona" },
                ]
            },
            {
                type: "3 PERSONAS",
                options: [
                    { duration: "2 horas de clase", price: "48,30€/persona" },
                ]
            }
        ],
        aditionalInfo: [
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-peinado-en-barcelona.webp",
        link: "/bono-belleza-personalizado-barcelona",
    },
];
export const workshopList = [
    {
        titleCard: "Curso 1",
        titlePage: "Curso 1",
        subtitle: "Piensa en ti en este bono de belleza y cuidado personal",
        description: "Nuestra imagen es importante, pero más importante es darnos un espacio para nosotras, para descansar, para aprender y para conectar. Este bono está pensado para esas personas cuyo ritmo de vida va casi más rápido que ellas y necesitan un espacio seguro, tranquilo y calmado donde darse un respiro y dedicarse un tiempo para si mismas. Tendrás todo el 2025 para completar todos los servicios y tendremos línea directa por Whatsapp para ir resolviendo tus dudas.",
        whatYouWillLearn: [ 
            "A realizar un peinado paso a paso",
            "A colocar correctamente horquillas, gomas y todo el material necesario",
            "A usar la plancha o tenacilla correctamente y de forma sencilla"
        ],
        include: [
            "4 horas de curso de automaquillaje",
            "2 clases autopeinado (1h + 1h o 2h)",
            "Pack de 9 brochas",
            "1 año de caducidad",
        ],
        durationPrice: [
            {
                type: "Vienes Sola",
                options: [
                    { duration: "", price: "50,00€" },
                ]
            },
            {
                type: "Con una amiga",
                options: [
                    { duration: "", price: "45,00€ por cabeza" },
                ]
            },
        ],
        aditionalInfo: [
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-maquillaje.webp",
        link: "/curso-maquillaje-natural-barcelona",
    },
    
    {
        titleCard: "Curso 3",
        titlePage: "Curso de Maquillaje Natural en Barcelona",
        subtitle: "Piensa en ti en este bono de belleza y cuidado personal",
        description: "Nuestra imagen es importante, pero más importante es darnos un espacio para nosotras, para descansar, para aprender y para conectar. Este bono está pensado para esas personas cuyo ritmo de vida va casi más rápido que ellas y necesitan un espacio seguro, tranquilo y calmado donde darse un respiro y dedicarse un tiempo para si mismas. Tendrás todo el 2025 para completar todos los servicios y tendremos línea directa por Whatsapp para ir resolviendo tus dudas.",
        whatYouWillLearn: [ 
            "A realizar un peinado paso a paso",
            "A colocar correctamente horquillas, gomas y todo el material necesario",
            "A usar la plancha o tenacilla correctamente y de forma sencilla"
        ],
        include: [
            "4 horas de curso de automaquillaje",
            "2 clases autopeinado (1h + 1h o 2h)",
            "Pack de 9 brochas",
            "1 año de caducidad",
        ],
        durationPrice: [
            {
                type: "Vienes Sola",
                options: [
                    { duration: "", price: "50,00€" },
                ]
            },
            {
                type: "Con una amiga",
                options: [
                    { duration: "", price: "45,00€ por cabeza" },
                ]
            },
        ],
        aditionalInfo: [
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-maquillaje.webp",
        link: "/taller-maquillaje-dia-a-dia-barcelona",
    },
    {
        titleCard: "Curso 4",
        titlePage: "Curso de Maquillaje Natural en Barcelona",
        subtitle: "Piensa en ti en este bono de belleza y cuidado personal",
        description: "Nuestra imagen es importante, pero más importante es darnos un espacio para nosotras, para descansar, para aprender y para conectar. Este bono está pensado para esas personas cuyo ritmo de vida va casi más rápido que ellas y necesitan un espacio seguro, tranquilo y calmado donde darse un respiro y dedicarse un tiempo para si mismas. Tendrás todo el 2025 para completar todos los servicios y tendremos línea directa por Whatsapp para ir resolviendo tus dudas.",
        whatYouWillLearn: [ 
            "A realizar un peinado paso a paso",
            "A colocar correctamente horquillas, gomas y todo el material necesario",
            "A usar la plancha o tenacilla correctamente y de forma sencilla"
        ],
        include: [
            "4 horas de curso de automaquillaje",
            "2 clases autopeinado (1h + 1h o 2h)",
            "Pack de 9 brochas",
            "1 año de caducidad",
        ],
        durationPrice: [
            {
                type: "Vienes Sola",
                options: [
                    { duration: "", price: "50,00€" },
                ]
            },
            {
                type: "Con una amiga",
                options: [
                    { duration: "", price: "45,00€ por cabeza" },
                ]
            },
        ],
        aditionalInfo: [
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-maquillaje.webp",
        link: "/curso-maquillaje-natural-novias-barcelona",
    },
    {
        titleCard: "Curso 5",
        titlePage: "Curso de Maquillaje Natural en Barcelona",
        subtitle: "Piensa en ti en este bono de belleza y cuidado personal",
        description: "Nuestra imagen es importante, pero más importante es darnos un espacio para nosotras, para descansar, para aprender y para conectar. Este bono está pensado para esas personas cuyo ritmo de vida va casi más rápido que ellas y necesitan un espacio seguro, tranquilo y calmado donde darse un respiro y dedicarse un tiempo para si mismas. Tendrás todo el 2025 para completar todos los servicios y tendremos línea directa por Whatsapp para ir resolviendo tus dudas.",
        whatYouWillLearn: [ 
            "A realizar un peinado paso a paso",
            "A colocar correctamente horquillas, gomas y todo el material necesario",
            "A usar la plancha o tenacilla correctamente y de forma sencilla"
        ],
        include: [
            "4 horas de curso de automaquillaje",
            "2 clases autopeinado (1h + 1h o 2h)",
            "Pack de 9 brochas",
            "1 año de caducidad",
        ],
        durationPrice: [
            {
                type: "Vienes Sola",
                options: [
                    { duration: "", price: "50,00€" },
                ]
            },
            {
                type: "Con una amiga",
                options: [
                    { duration: "", price: "45,00€ por cabeza" },
                ]
            },
        ],
        aditionalInfo: [
            "Uso de material incluido.",
            "Disponibilidad a concretar por Whatsapp (de Lunes a Sábados).",
        ],
        location: "Calle Pere IV 8-10, Sant Martí, 08005 Barcelona.",
        imageSrc: "/images/homepage/courses/curso-de-maquillaje.webp",
        link: "/taller-maquillaje-natural-noche-barcelona",
    },
  
];

import Careers from "../../Models/Careers";
import Skills from "../../Models/Skills";
import Profiles from "../../Models/Profiles";
require("../../relations");

const CareersSeed = () => {
  Careers.create(
    {
      name: "Informática",
      career: "TSU en Informatica",
      path: "informatica",
      color: "BLUE",
      icon: "CODE",
      profile: "Profile",
      pensumURL:
        "http://www.iujobarquisimeto.edu.ve/Pensums/pensum_informatica.pdf",
      Skills: [
        {name: `Recurso humano de una formación técnica profesional integral, sustentada además con un complemento de valores morales y sociales gracias a la ideología, filosofía y doctrina de: FE Y ALEGRÍA.`, },
        {name: `Posee un cúmulo de conocimientos, aptitudes y destrezas para participar de manera responsable y consciente en el aporte y ejecución de soluciones a problemas en los sistemas computacionales que puedan presentarse en las organizaciones.`},
        {name: `Recurso calificado para promover y manejar el Análisis, Creación, Diseño e implantación e instrucción de Sistemas.`},
        {name: `Manejo de Herramientas y Metodologías de vanguardia que le faciliten el desarrollo de las soluciones integradas.`, },
        {name: `Conocimiento de Técnicas y procesos para evaluar la factibilidad de proyectos.`, },
        {name: `Profesional egresado con un alto nivel de iniciativa, disposición de servicio y valores que le faciliten un buen desempeño en el sector laboral.`, },
        {name: `Capacitado para la "Toma de Decisiones" a nivel técnico y administrativo en el área de computación.`, },
        {name: `Manejo de habilidades y destrezas para la capacitación de usuarios, lo que le permite brindar una excelente respuestas para soporte.`, },
        {name: `Brinda asistencia técnica para la adquisición e instalación de equipos y periféricos de los sitemas de computación`, },
        {name: `Posee el conocimiento para el diseño, creación, soporte, operación y administración de Redes de Computadoras.`, },
        {name: `Manejo de aplicaciones para el desarrollo y administración de entornos Web.`, },
        {name: `De igual forma posee los conocimientos y destrezas para la generación de soluciones a través del uso de Bases de Datos Relacionales.De igual forma posee los conocimientos y destrezas para la generación de soluciones a través del uso de Bases de Datos Relacionales.`},
      ],
      Profiles: [
        {name: "Análisis, evaluación, diseño, desarrollo, implementación de Sistemas de Computación"},
        {name: `En adición posee la pericia y capacidad para la Operación y Administración de Proyectos Informáticos de diversos niveles de Desarrollo y complejidad.`}],
    },
    {include: [Skills, Profiles]}
  );

  Careers.create({
    name: "Electrónica",
    career: "TSU EN ELECTRÓNICA",
    path: "electronica",
    color: "GRAY",
    icon: "RESISTANCE",
    profile: `El Técnico Superior Universitario en Electrónica, es un profesional capacitado para integrarse a equipos multidisciplinarios, en el análisis, diseño, fabricación, mantenimiento y programación de dispositivos y sistemas electrónicos y automáticos en el campo industrial y doméstico, respondiendo al contexto social de acuerdo con las nuevas tecnologías que apliquen para la misma.`,
    pensumURL:
      "http://www.iujobarquisimeto.edu.ve/Pensums/pensum_informatica.pdf",
    Skills: [
      {name: `Recurso humano de una formación técnica profesional integral, sustentada además con un complemento de valores morales y sociales gracias a la ideología, filosofía y doctrina de: FE Y ALEGRÍA.`, },
      {name: `Posee un cúmulo de conocimientos, aptitudes y destrezas para participar de manera responsable y consciente en el aporte y ejecución de soluciones a problemas en los sistemas computacionales que puedan presentarse en las organizaciones.`},
      {name: `Recurso calificado para promover y manejar el Análisis, Creación, Diseño e implantación e instrucción de Sistemas.`},
      {name: `Manejo de Herramientas y Metodologías de vanguardia que le faciliten el desarrollo de las soluciones integradas.`, },
      {name: `Conocimiento de Técnicas y procesos para evaluar la factibilidad de proyectos.`, },
      {name: `Profesional egresado con un alto nivel de iniciativa, disposición de servicio y valores que le faciliten un buen desempeño en el sector laboral.`, },
      {name: `Capacitado para la "Toma de Decisiones" a nivel técnico y administrativo en el área de computación.`, },
      {name: `Manejo de habilidades y destrezas para la capacitación de usuarios, lo que le permite brindar una excelente respuestas para soporte.`, },
      {name: `Brinda asistencia técnica para la adquisición e instalación de equipos y periféricos de los sitemas de computación`, },
      {name: `Posee el conocimiento para el diseño, creación, soporte, operación y administración de Redes de Computadoras.`, },
      {name: `Manejo de aplicaciones para el desarrollo y administración de entornos Web.`, },
      {name: `De igual forma posee los conocimientos y destrezas para la generación de soluciones a través del uso de Bases de Datos Relacionales.De igual forma posee los conocimientos y destrezas para la generación de soluciones a través del uso de Bases de Datos Relacionales.`},
    ],
    Profiles: [
      {name: "Análisis, evaluación, diseño, desarrollo, implementación de Sistemas de Computación"},
      {name: `En adición posee la pericia y capacidad para la Operación y Administración de Proyectos Informáticos de diversos niveles de Desarrollo y complejidad.`}],
  },
    {include: [Skills, Profiles]}
  )
};

export default CareersSeed;

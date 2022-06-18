const header = (doc, name) => {
    doc.setFontSize(22)
    doc.text("IUJO", 10, 10);
    doc.setFontSize(12)
    doc.text("EXTENSIÓN BARQUISIMETO", 10, 15);
    doc.setFontSize(10)
    const date = new Date();
    doc.text("Fecha: " + date.toString().slice(4, 21), 10, 20);
    doc.setFontSize(28);
    doc.text(`Reporte de ${name}`, 62, 32);
    doc.setFontSize(12);
}

export default header;

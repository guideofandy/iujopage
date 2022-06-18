import axios from "axios";
import jsPDF from "jspdf";
import header from "./header";

const getBitacora = async () => {
    const headers = [
        {
            id: "id",
            name: "id",
            prompt: "ID",
            width: 15,
            align: "center",
            padding: 0,
        },
        {
            id: "event",
            name: "event",
            prompt: "EVENTO",
            width: 50,
            align: "center",
            padding: 0,
        },
        {
            id: "module",
            name: "module",
            prompt: "MODULO",
            width: 50,
            align: "center",
            padding: 0,
        },
        {
            id: "createdAt",
            name: "createdAt",
            prompt: "TIEMPO",
            width: 63,
            align: "center",
            padding: 0,
        },
        {
            id: "user",
            name: "user",
            prompt: "USUARIO",
            width: 80,
            align: "center",
            padding: 0,
        }
    ];
    try {
        const response = await axios.get("/api/reports?type=bitacora");
        const array = await response.data.logs;
        const data = await array.map((el) => {
            return {
                id: el.id.toString(),
                event: el.event,
                module: el.module,
                createdAt: `${el.createdAt.slice(0, 10)} ${el.createdAt.slice(11, 19)}`,
                user: el.user.name,
            };
        });
        const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "p" });
        header(doc, "Bitacora");
        doc.table(10, 40, data, headers, {
            margins: { top: 10, bottom: 10, left: 10, right: 10 },
        });
        return doc;
    } catch (error) {
        console.log(error.response);
    }
};

export default getBitacora;

import axios from "axios";
import jsPDF from "jspdf";
import header from "./header";

const getDataUsers = async () => {
    const headers = [
        {
            id: "id",
            name: "id",
            prompt: "id",
            width: 15,
            align: "center",
            padding: 0,
        },
        {
            id: "nombre",
            name: "nombre",
            prompt: "nombre",
            width: 80,
            align: "center",
            padding: 0,
        },
        {
            id: "email",
            name: "email",
            prompt: "email",
            width: 100,
            align: "center",
            padding: 0,
        },
        {
            id: "post",
            name: "post",
            prompt: "N° Posts",
            width: 60,
            align: "center",
            padding: 0,
        },
    ];
    try {
        const response = await axios.get("/api/reports/");
        const array = await response.data.dataFetchGetUsers;
        const data = await array.map((el) => {
            return {
                id: el.id.toString(),
                nombre: el.name,
                email: el.email,
                post: el.post.length.toString(),
            };
        });
        const doc = new jsPDF({ putOnlyUsedFonts: true, orientation: "p" });
        header(doc, "Usuarios");
        doc.text(
            "Usuarios totales: " +
                response.data.dataFetchGetUsersCount.toString(),
            10,
            50
        );
        doc.text(
            "Posts totales publicados: " +
                response.data.dataFetchGetPostCount.toString(),
            10,
            45
        );
        doc.table(10, 60, data, headers, {
            margins: { top: 10, bottom: 10, left: 10, right: 10 },
        });
        return doc;
    } catch (error) {
        console.log(error.response);
    }
};

export default getDataUsers;

import getDataUsers from "./getDataUsers";
import getBitacora from "./getBitacora";

const PostTemplete = async (type) => {
    if (type === "bitacora") {
        const doc = await getBitacora();
        const date = new Date();
        doc.save(`BITACORA-${date.getDate()}-${date.getMonth()}-${date.getFullYear()}.pdf`)
    } else {
        const doc = await getDataUsers();

        doc.save("report.pdf");
    }
};

export default PostTemplete;

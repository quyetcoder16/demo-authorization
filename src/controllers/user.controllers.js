import { getList } from "../services/user.services.js";

const getListStudent = async (req, res) => {
    const listStudent = await getList();
    if (listStudent) {
        res.status(200).send(listStudent);
    } else {
        res.status(404).send("Not found!");
    }
}

export {
    getListStudent,
}
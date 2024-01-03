import { sequelize } from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

const getList = async () => {
    const listStudent = await conn.users.findAll();
    if (listStudent) {
        return listStudent;
    } else {
        return false;
    }
}

export {
    getList,
}
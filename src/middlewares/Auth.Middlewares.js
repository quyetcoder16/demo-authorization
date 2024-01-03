import { getList } from "../services/user.services.js";

const users = await getList();

const findUser = (user_id) => {
    return users.find(user => user.user_id === user_id);
}

const authUser = (req, res, next) => {
    const { user_id } = req.body;
    console.log(user_id);
    if (!user_id) {
        return res.status(403).send("you need sign in");
    }
    const user = findUser(user_id);
    if (!user) {
        return res.status(403).send("you need sign in");
    }
    req.user = user;
    next();
}


const authPage = permission => {
    return (req, res, next) => {
        const { role } = req.user;
        if (!permission.includes(role)) {
            return res.status(401).send("you don't have permission!");
        }
        next();
    }
}

export {
    authUser,
    authPage,
}

class Userdto{
    id;
    phone;
    createdAt;
    activated;
    constructor(user){
        this.id=user._id;
        this.phone=user.phone;
        this.activated=user.activated;
        this.createdAt=user.createdAt;

    }
}

module.exports=Userdto
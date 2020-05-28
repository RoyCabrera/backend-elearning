import Role from '../models/Role';


export const createRole = async (req,res) => {

    const {name,description} = req.body;

    try {
        let newRole = await Role.create({

            name:name,
            description:description
        },{
            fields:['name','description']
        })

        if(newRole){
            res.json({
                message:"Rol creado satisfactoriamente",
                data:newRole
            });
        }
    } catch (error) {
        console.log("aaaaaaaa",error);

        res.status(500).json({
            message:"Algo sucedió mal"
        });
    }


}

export const getRoles = async (req,res) => {
    const roles = await Role.findAll();
    res.json({
        data:roles
    })
}

export const getRole = async (req,res) => {

    const {id} = req.params;

    const role = await Role.findOne({
        where:{
            id:id
        }
    })

    res.json(role)
}

export const deletRole = async (req,res) => {
    const { id } = req.params;

    const deleteRowCount = await Role.destroy({
        where:{
            id:id
        }
    });

    res.json({
        message:"Rol eliminado correctamente",
        count:deleteRowCount
    })
}

export const updateRole = async (req,res) => {
    const { id } = req.params;
    const {name,description} = req.body;

    const roles = await Role.findAll({
        attributes:['id','name','description'],
        where:{
            id:id
        }
    })

    if(roles.length >0){
        roles.forEach(async role => {
            await role.update({
                name:name,
                description:description
            })
        })
    }

    res.json({
        message:"Proyecto actualizado correctamente",
        data:roles
    })
}
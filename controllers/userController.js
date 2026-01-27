const userModel = require('../models/User');

class UserController{
    async createUser(req, res){
    try{
        const newUser = await userModel.createUser(req.body);
        res.status(201).json({
            success: true,
            message: 'Utilisateur creer avec succes',
            data: newUser
        });
    } catch(err)
    {
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la creation',
            error: err.message
        })
    }

}

async getAllUsers(req, res) {
    try {
        const users= await userModel.getAllUsers();

        res.json({
            success: true,
            data: users,
            count: users.length
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Erreur serveur',
            error: err.message
        });
    }
}

async updateUser(req, res) {
    try {
        const updateUser= await userModel.updateUser(req.params.id, req.body);

        if(!updateUser) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur nest pas trouve'
            });
        }

        res.json({
            success: true,
            message: 'Utilisateur modifier avec success',
            data: updateUser,
            
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la modification',
            error: err.message
        });
    }
}

async deleteUser(req, res) {
    try {
        const isDeleted= await userModel.deleteUser(req.params.id);

        if(!isDeleted) {
            return res.status(404).json({
                success: false,
                message: 'Utilisateur nest pas trouve'
            });
        }

        res.json({
            success: true,
            message: 'Utilisateur supprime avec success'
            
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Erreur lors de la suppression',
            error: err.message
        });
    }
}

async getUserById(req, res) {
    try {
      const user = await userModel.getUserById(req.params.id);
      console.log(req.params.id);

      if(!user) {
        return res.status(404).json({
          success: false,
          message: 'M pa jwenn itilizate a'
        });
      }

      res.json({
        success: true,
        message: 'Nou jwenn yo',
        data: user
      });
    } catch (err) {
      console.error('Erreur complète:', err);
      res.status(500).json({
        success: false,
        message: 'ere seve',
        error: err.message
      });
    }
  }

       
    
    

    
}
module.exports = new UserController();
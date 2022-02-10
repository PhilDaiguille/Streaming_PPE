<?php
    try{
        $_pdo_options[PDO::ATTR_ERRMODE] = PDO::ERRMODE_EXCEPTION;
        $_bdd = new PDO('mysql:host=localhost;
                        dbname=streaming', 
                        'root', '',
                        array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8',$_pdo_options));
        
        $_response = $_bdd->query('SELECT * FROM user');
    }
    catch(Exception $e){
        die('Erreur : '.$e->getMessage());
    }
   
?>
<?php
    if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['email']) && isset($_POST['ville']) && isset($_POST['pays'])){
        if(!isset($_POST['nom']) && !isset($_POST['prenom']) && !isset($_POST['email']) && !isset($_POST['ville']) && !isset($_POST['pays'])){
            print "<p class=\"warning\">Veuillez saisir des lettre</p>";
        }
        else{
            $nom = $_POST['nom'];
            $prenom = $_POST['prenom'];
            $email = $_POST['email'];
            $ville = $_POST['ville'];
            $pays = $_POST['pays'];
            $req = $_bdd->prepare('INSERT INTO user(nom, prenom, email, ville, pays) VALUES(:nom, :prenom, :email, :ville, :pays)');
            $req->execute(array(
                'nom' => $nom,
                'prenom' => $prenom,
                'email' => $email,
                'ville' => $ville,
                'pays' => $pays
            ));
            print "<p class=\"success\">Votre inscription a bien été prise en compte</p>";
        }
    }
    
?>
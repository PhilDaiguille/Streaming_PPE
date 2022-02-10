<?php
    include_once("./page/header_inc.php");
?>
<body>
    <header>
        <img src="./assets/film-strip-with-play-triangle_icon-icons.com_56298.png" alt="netflix">
        <h1>Films, séries TV et bien plus en illimité.</h1>
            <ul>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            visibility
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="material-icons">
                            light_mode
                        </span>
                    </a>
                </li>
            </ul>
    </header>
    <main>
        <nav>
            <ul>
                <li><img src="https://fr.web.img6.acsta.net/c_310_420/pictures/210/485/21048559_20131010181109755.jpg" alt="truc"></li>
                <li><img src="https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/36/02/52/18846059.jpg" alt="truc"></li>
                <li><img src="https://fr.web.img4.acsta.net/r_310_420/medias/nmedia/18/35/57/73/18660716.jpg" alt="truc"></li>
                <li><img src="https://fr.web.img3.acsta.net/c_310_420/pictures/19/09/24/09/25/3228359.jpg" alt="truc"></li>
                <li><img src="https://fr.web.img3.acsta.net/r_310_420/img/43/7f/437f3c43ec217ff7995160f921a6d007.jpg" alt="truc"></li>
            </ul>
        </nav>
        <?php
            include_once("./page/connect_BDD.php");
        ?>
        <form action="#" method="post">
            <fieldset>
                <legend>Remplissez le formulaire</legend>
                <label for="nom">nom</label>
                <input type="text" id="nom" name="nom" placeholder="nom" aria-required="true" autofocus required>
                <label for="prenom">prénom</label>
                <input type="text" id="prenom" name="prenom" placeholder="prenom" aria-required="true" required>
                <label for="email">email</label>
                <input type="email" id="email" name="email" placeholder="email" aria-required="true" required>
                <label for="ville">ville</label>
                <select name="ville" id="ville" aria-required="true" required>
                    <option value="">- Choisissez la ville -</option>
                    <option value="paris">Paris</option>
                    <option value="lyon">Lyon</option>
                    <option value="marseille">Marseille</option>
                    <option value="toulouse">Toulouse</option>
                    <option value="nantes">Nantes</option>
                    <option value="strasbourg">Strasbourg</option>
                    <option value="bordeaux">Bordeaux</option>
                    <option value="lille">Lille</option>
                    <option value="rennes">Rennes</option>
                </select>
                <label for="pays">Pays</label>
                <select name="pays" id="pays" aria-required="true" required>
                    <option value="">- Choisissez le pays -</option>
                    <option value="France">France</option>
                    <option value="Espagne">Espagne</option>
                    <option value="Italie">Italie</option>
                    <option value="Allemagne">Allemagne</option>
                    <option value="Portugal">Portugal</option>
                </select>
                <input type="submit" value="Valider">
            </fieldset>
        </form>
       

    </main>
<?php
    include_once("./page/footer_form_inc.php");
?> 
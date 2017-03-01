 //JavaScript Document
 function moveToBasket(id) {
     // ces deux variable serviront par la suite a stocke l’informatio nde la positio nde l’objet
     // position1 prendra comem valeur gauche ou droite
     // position2 prendra comme valeure haut ou bas
     var position1 = "";
     var position2 = "";
     // on recupere le code html contenu dans la div produit
     var html = $("#" + id).html();
     // on rajoute à ce même code une div move qui va bouger.
     html2 = html + '';
     // on attribue a la div de contenu produit sa nouvelle composition
     $("#" + id).html(html2);
     // je récupère la position du panier
     var positionPanier = $("#panier").offset();
     // j’attribue la coordonné x du panier a une variable xPanier
     var xPanier = positionPanier.left;
     // j’attribue la coordonné Y du panier a une variable yPanier
     var yPanier = positionPanier.top;
     // je recupere la position du produit qui à été cliqué
     var produit = $("#" + id).offset();
     // j’attribue la coordonné x du panier a une variable xPanier
     var xProduit = produit.left;
     // j’attribue la coordonné Y du panier a une variable yPanier
     var yProduit = produit.top;
     // on va determiner la position du produit par rapport au panier, en haut dessus dessous a gauche a droite.
     if (xPanier - xProduit < 0) {
         position1 = (xPanier - xProduit);
         position1 = ' -= ' + (xPanier - xProduit) * (-1);
     }
     else {
         position1 = ' += ' + (xPanier - xProduit);
     }
     if (yPanier - yProduit < 0) {
         position2 = ' -= ' + (yPanier - yProduit) * (-1);
     }
     else {
         position2 = ' -= ' + (yPanier - yProduit) * (-1);
     }
     $("#move").animate({
         left: "+position1 + "
         , top: "+position2 + "
         , height: $("#panier").height()
         , width: $("#panier").width()
     }, "slow", function () {
         $("#move").fadeIn('slow', function () {
             $("#" + id).html(html);
         });
         // Animation complete.
     });
 }
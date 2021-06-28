
/*------------------
resize observer toggle body.compact===> gestion du responsive
--------------------*/


let doc = document.getElementById("body");//je cible toute mon body body
var ro = new ResizeObserver(entries => {//je crée un observer de comportement
    for (let entry of entries) {
        const cr = entry.contentRect;

        if (cr.width < 1000) {//la class compact est ajouté si la width est inf à 100px
            doc.classList.add("compact")
        } else {
            doc.classList.remove("compact")

        }
    };

});
ro.observe(doc);//j'applique l'observer



/*----------------
tabs and sections
-------------------*/


let tabs = document.getElementsByClassName('navTab');//je pointe mes onglets de tabs
let focusedSectionClass = "";//je déclare ma variable de class en string qui prendra le focus


for (let tab of tabs) {

    tab.addEventListener('click', function (ev) {//ajout du comportement on click pour tous les tabs

        focusedSectionClass = tab.classList[1];// la class focus devient la seconde class de la tab

        ev.currentTarget.classList.toggle('active');//ajout de class active sur click

        //les autres tabs perdent la class activ
        let allTabs = ev.currentTarget.parentElement.children;
        for (let tab of allTabs) {
            tab.classList.remove('active')
        }
        // la tab cible prend la class activ
        ev.currentTarget.classList.add('active')

        let sections = document.getElementsByTagName('section');
        //pour chaque section j'ajoute la focus si son tab est actif
        for (let section of sections) {
            if (section.classList.contains(focusedSectionClass)) {
                section.classList.add("focused");
            }
            if (!section.classList.contains(focusedSectionClass) && section.classList.contains("focused"))//retire le focuse pour l'acienne section focused
            {
                section.classList.remove("focused");

            }


        };
    })




}



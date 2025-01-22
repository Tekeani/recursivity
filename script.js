const dossierPrincipal = {
    nom: 'Ada',
    contenu: [{
        nom: 'Projets collectifs Ada',
        contenu: [{
            nom: 'Pico8',
            contenu: [{
              nom: 'mariokart.p8'
            }]
          },
          {
            nom: 'Dataviz',
            contenu: [{
                nom: 'index.html'
              },
              {
                nom: 'script.js'
              }
            ]
          }
        ]
      },
      {nom: 'CV.pdf'},
      {
        nom: 'Projets persos',
        contenu: [{
          nom: 'Portfolio',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }]
      },
    ],
  }

function afficherDossier() {
    console.log(dossierPrincipal.nom)
}

afficherDossier()

let contenu = dossierPrincipal.contenu
function afficherDossierIteratif(contenu) {
        for (let i = 0; i < contenu.length; i++) {
        console.log(contenu[i].nom)
    }
}

afficherDossierIteratif(dossierPrincipal.contenu)


function afficherDossierRecursif(contenu, i = 0) {
    if (i >= contenu.length) {
        return
    }
    console.log(contenu[i].nom)
    afficherDossierRecursif(contenu, i + 1)
}

afficherDossierRecursif(contenu, 0)
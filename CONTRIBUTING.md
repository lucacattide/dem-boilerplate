# Best Practices

## Repository

- .gitignore
    * __/node_modules/:__ pacchetti Full-Stack Front-End (_NodeJS_);
    * __/.:__ files di sistema e di configurazione vari;
    * __/.json:__ files di configurazione vari Full-Stack Front-End;
	* __/gulpfile.js:__ file di configurazione task-runner Front-End (_Gulp_);
	

Es.

```
	# Generale
    /node_modules/
    /.*
    /*.json
    /gulpfile.js
```


## Branches

- __develop__ (Sviluppo);
- __staging__ (Beta);
- __master__ (Produzione - _Default_);


## Commits

- __< Etichetta/Titolo >__
    * -__< Descrizione >__;

- __Etichetta__: label identificativa oggetto dell'implementazione (se prevista);
- __Titolo__: breve nomenclatura distintiva dell'oggetto dell'implementazione
- __Descrizione__: breve nota illustrativa dell'implementazione effettuata;

Es.

```
	Updates template

	- Aggiornate icone;
```


## Merges

- __staging__: merging da __develop__;
- __master__: merging da __staging__;


## Deployment

### Capistrano

#### CLI

- __Beta__
    * ```cap staging deploy```
- __Produzione__
	* ```cap production deploy```


## Host

### Directories essenziali ^!

- __.ssh__
- __releases__
- __repo__
- __shared__
- __current__

### Files essenziali^!

- __.ftpquota__
- __revisions.log__

^! __Non eliminare__

# lippupeli
lippuja


## Data source

Thank you [hampusborgos](https://github.com/hampusborgos)!

Flag source: https://github.com/hampusborgos/country-flags/tree/main/png250px

## ChatGPT 3.5 Turbo

Some halluzination, see for example **bt**:

~~~R

cat(paste("Provide country and capital of countries in Finnish, Swedish, English and Spanish:", paste(cc2[(length(cc2)-9):length(cc2)], collapse = ", "), "provide results in json-format"))

~~~

> dm: Provide country and capital of countries in Finnish, Swedish, English and Spanish: br, bs, bt, bv, bw, by, bz, ca, cc, cd provide results in json-format

> ChatGPT: Certainly! Here is the list of countries and their capitals in Finnish, Swedish, English, and Spanish for the given country codes in JSON format:

~~~js

{
  "br": {
    "fi": {"country": "Brasilia", "capital": "Brasília"},
    "sv": {"country": "Brasiliens", "capital": "Brasília"},
    "en": {"country": "Brazil", "capital": "Brasília"},
    "es": {"country": "Brasil", "capital": "Brasilia"}
  },
  "bs": {
    "fi": {"country": "Nassau", "capital": "Nassau"},
    "sv": {"country": "Bahamas", "capital": "Nassau"},
    "en": {"country": "Bahamas", "capital": "Nassau"},
    "es": {"country": "Bahamas", "capital": "Nassau"}
  },
  "bt": {
    "fi": {"country": "Thimphu", "capital": "Thimphu"},
    "sv": {"country": "Bhutan", "capital": "Thimphu"},
    "en": {"country": "Bhutan", "capital": "Thimphu"},
    "es": {"country": "Bután", "capital": "Thimphu"}
  },
  "bv": {
    "fi": {"country": "Bouvet-saari", "capital": ""},
    "sv": {"country": "Bouvetön", "capital": ""},
    "en": {"country": "Bouvet Island", "capital": ""},
    "es": {"country": "Isla Bouvet", "capital": ""}
  },
  "bw": {
    "fi": {"country": "Gaborone", "capital": "Gaborone"},
    "sv": {"country": "Botswana", "capital": "Gaborone"},
    "en": {"country": "Botswana", "capital": "Gaborone"},
    "es": {"country": "Botsuana", "capital": "Gaborone"}
  },
  "by": {
    "fi": {"country": "Minsk", "capital": "Minsk"},
    "sv": {"country": "Vitryssland", "capital": "Minsk"},
    "en": {"country": "Belarus", "capital": "Minsk"},
    "es": {"country": "Bielorrusia", "capital": "Minsk"}
  },
  "bz": {
    "fi": {"country": "Belmopan", "capital": "Belmopan"},
    "sv": {"country": "Belize", "capital": "Belmopan"},
    "en": {"country": "Belize", "capital": "Belmopan"},
    "es": {"country": "Belice", "capital": "Belmopán"}
  },
  "ca": {
    "fi": {"country": "Ottawa", "capital": "Ottawa"},
    "sv": {"country": "Kanada", "capital": "Ottawa"},
    "en": {"country": "Canada", "capital": "Ottawa"},
    "es": {"country": "Canadá", "capital": "Ottawa"}
  },
  "cc": {
    "fi": {"country": "Kookossaaret", "capital": ""},
    "sv": {"country": "Kokosöarna", "capital": ""},
    "en": {"country": "Cocos (Keeling) Islands", "capital": ""},
    "es": {"country": "Islas Cocos (Keeling)", "capital": ""}
  },
  "cd": {
    "fi": {"country": "Kinshasa", "capital": "Kinshasa"},
    "sv": {"country": "Kongo-Kinshasa", "capital": "Kinshasa"},
    "en": {"country": "Democratic Republic of the Congo", "capital": "Kinshasa"},
    "es": {"country": "República Democrática del Congo", "capital": "Kinshasa"}
  }
}


~~~
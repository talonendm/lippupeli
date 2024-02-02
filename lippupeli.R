# lippupeli.R

getwd()
setwd("C:/Users/talon/git/lippupeli/")
# List only PNG files in the folder
png_files <- list.files(path = "flags/", pattern = ".png$", full.names = FALSE)

# Print the file names
print(png_files)

# let filePaths = ["flags/ad.png", "flags/ae.png", "flags/af.png", "flags/ag.png"];

png_files <- png_files[1:10]

data <- paste(png_files, collapse = "','")
data <- paste0("let filePaths = ['", data, "'];")
cat(data)

# Remove ".png" from each file name
cc2 <- gsub(".png", "", png_files)



# GPT Turbp 3.5 -----------------
print(paste("Provide information of countries:", paste(cc2, collapse = ", "), "provide results in json-format"))

# Install and load the jsonlite package
if (!requireNamespace("jsonlite", quietly = TRUE)) {
  install.packages("jsonlite")
}
library(jsonlite)

# Create a list with information about countries
countries_info <- list(
  ad = list(name = "Andorra", capital = "Andorra la Vella"),
  ae = list(name = "United Arab Emirates", capital = "Abu Dhabi"),
  af = list(name = "Afghanistan", capital = "Kabul"),
  ag = list(name = "Antigua and Barbuda", capital = "Saint John's"),
  ai = list(name = "Anguilla", capital = "The Valley"),
  al = list(name = "Albania", capital = "Tirana"),
  am = list(name = "Armenia", capital = "Yerevan"),
  ao = list(name = "Angola", capital = "Luanda"),
  aq = list(name = "Antarctica", capital = "N/A"),
  ar = list(name = "Argentina", capital = "Buenos Aires")
)

# Convert the list to JSON format
json_data <- toJSON(countries_info, pretty = TRUE)

# Print the JSON data
cat(json_data)

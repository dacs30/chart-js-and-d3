library(ggplot2)

carsSample <- read.csv(file = './cars-sample.csv')


ggplot(data = carsSample, aes(x = MPG, y = Horsepower)) +
  geom_point()

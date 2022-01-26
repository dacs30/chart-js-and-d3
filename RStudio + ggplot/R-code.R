library(ggplot2)

carsSample <- read.csv(file = './cars-sample.csv')


ggplot(data = carsSample, aes(x = Weight, y = MPG, color = Manufacturer, size = Weight)) +
  geom_point(alpha = 0.5)

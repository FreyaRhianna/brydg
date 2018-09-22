import os
import csv

def generate_postcodes():
  # postcodes for
  with open(os.path.join(os.path.abspath('./'), 'postcodes.csv')) as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    reader.next()
    for row in reader:
      yield row[0]
  pass

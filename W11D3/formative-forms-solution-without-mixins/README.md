```
npm test test/01_home.test.js
```


select#favorite-beatle.form-control(name='favoriteBeatle')
        option(value="" disabled) --Please choose an option--
        each beatle in ['John', 'Paul', 'Ringo', 'George', 'Scooby-Doo']
          option(value=beatle selected=(beatle === favoriteBeatle? 'selected'))= beatle
const express = require('express')
const path = require('path')
const ejs = require('ejs')
const app = express()
const arr = require('./user/user.json')

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use(express.urlencoded({ extended: false }))

app.post('/adduser', (req, res) => {
    const { name, age, sex } = req.body
    const id = arr.at(-1) ? arr.at(-1).id + 1 : 1
    const userinfo = { id, name, age: +age, sex }
    arr.push(userinfo)
    res.redirect('/userlist')
})
app.get('/deluser/:id', (req, res) => {
    const delid = +req.params.id
    let index = arr.findIndex(user => user.id === delid)
    for (let i = index + 1; i < arr.length; i++) {
        arr[i].id--
    }
    arr.splice(index, 1)
    res.redirect('/userlist')
})
app.get('/edituser/:id', (req, res) => {
    const id = +req.params.id
    const user = arr.find(item => item.id = id)
    user.id = id
    res.render('useredit', { user })
})
app.post('/edituser', (req, res) => {
    const { name, age, sex } = req.body;
    const id = +req.query.id;
    const user = arr.find(item => item.id === id);
    user.name = name;
    user.age = age;
    user.sex = sex;
    res.redirect('/userlist');
});
app.use('/userlist', (req, res) => {
    res.render('userlist', { arr })
})
app.listen(3000, () => {
    console.log('项目启动成功');

})
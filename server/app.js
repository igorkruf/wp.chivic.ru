const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
//cors
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'OPTIONS'],
        allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type'],
    }

));
//app.use(mongoose)
//app.options('*', cors())
//Для чтения formData
const multer = require('multer')
const upload = multer()
//работа с изображениями GraphicsMagick 
const gm = require('gm');
//работа с файлами
const fs = require('fs');
//Схемы документов
const Service = require('./Mongoose/Service');
const Tehnologe = require('./Mongoose/Tehnologe');
const RazdelInteres = require('./Mongoose/RazdelInteres');
const TestService = require('./Mongoose/TestAddService');
//Хранилище аватарок
var storage_avatar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/avatar')
    },
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now())
        //cb(null, 'igor.png')
        cb(null, file.originalname)
    }
})
var avatar = multer({ storage: storage_avatar })
//multer добавления услуги
//хранилище иконок/услуги
var iconUslugi = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/var/www/website/src/assets/img/uslugi')
    },
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now())
        //cb(null, 'igor.png')
        cb(null, file.originalname)
    }
});

const fileFilterImg = (req, file, cb) => {

    if (file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}
var as = multer({ storage: iconUslugi, fileFilter: fileFilterImg });


//хранилище иконок/интерес
var iconInteres = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/var/www/website/src/assets/img/interes')
    },
    filename: function (req, file, cb) {
        //cb(null, file.fieldname + '-' + Date.now())
        //cb(null, 'igor.png')
        cb(null, file.originalname)
    }
});

// const fileFilterImg = (req, file, cb) => {

//     if (file.mimetype === "image/png" ||
//         file.mimetype === "image/jpg" ||
//         file.mimetype === "image/jpeg") {
//         cb(null, true);
//     }
//     else {
//         cb(null, false);
//     }
// }
var arhImgInteres = multer({ storage: iconInteres, fileFilter: fileFilterImg });



//Настройка хранилища файлов

// app.use(multer);
//var ggg = multer()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//const formData = require("express-form-data");
// const os = require("os");
/////////////////////////////////////////
/**
 * Options are the same as multiparty takes.
 * But there is a new option "autoClean" to clean all files in "uploadDir" folder after the response.
 * By default, it is "false".
 */
// const options = {
//     uploadDir: os.tmpdir(),
//     autoClean: false,
//     //autoClean: true
// };

// // parse data with connect-multiparty. 
// app.use(formData.parse(options));
// // delete from the request all empty files (size == 0)
// app.use(formData.format());
// // change the file objects to fs.ReadStream 
// //app.use(formData.stream());
// // union the body and the files
// app.use(formData.union());




////////////////////////////////////////////////
// var multer = require('multer');
// var upload = multer({ dest: ' uploads / ' });

// const MongoClient = require("mongodb").MongoClient;
// // создаем объект MongoClient и передаем ему строку подключения
// const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/", { useUnifiedTopology: true });
// mongoClient.connect(function (err, client) {

//     const db = client.db("test");
//     const collection = db.collection("users");
//     let user = { name: "Tom", age: 23 };
//     collection.insertOne(user, function (err, result) {

//         if (err) {
//             return console.log(err);
//         }
//         console.log(result.ops);
//         client.close();
//     });
// });

//




// ///////////////////////////////////////////




//Обработка формы добавления услуги


// app.post('/addservice', as.single("userfile"), async (req, res) => {
//     //console.log(req.body);
//     // let filedata = req.file;
//     // console.log(filedata);
//     res.set("Access-Control-Allow-Origin", '*');


//     mongoose.connect("mongodb://yura:123456@localhost:27017/website", { useUnifiedTopology: true, useNewUrlParser: true });
//     //console.log(req.body.parentservices);
//     //const pservices = req.body.parentservices;
//     // const parservices = pservices.map(function (parservice) {
//     //     console.log(parservice);
//     //     //       content: sotrudnik.content.rendered,
//     // });

//     //res.send(parservices);


//     const service = new Service({
//         paretn_service: req.body.parentservices,
//         name_service: req.body.nameservice,
//         min_price_service: req.body.minpriceservice,
//     });


//     await service.save(function (err) {

//         //mongoose.disconnect();  // отключение от базы данных

//         if (err) return console.log(err);
//         console.log("Сохранен объект", service);
//         // Service.find(function (err, services) {
//         //     if (err) return console.error(err);
//         //     console.log(services);
//         //     //res.send(services);
//         mongoose.disconnect();  // отключение от базы данных
//         // });
//         console.log('wwwwwwwwwwwww');
//         res.end();
//     });

//     //console.log('qqqqqqqqqqqqqqqqqqqqqqqqqqq');

// });
////////////////Получить список услуг 

app.get("/services", (req, res) => {

    //res.set("Access-Control-Allow-Origin", '*');


    // подключение
    mongoose.connect("mongodb://yura:123456@localhost:27017/website", { useUnifiedTopology: true, useNewUrlParser: true });


    Service.find(function (err, services) {
        if (err) return console.error(err);
        console.log(services);
        res.send(services);
        mongoose.disconnect();  // отключение от базы данных
    });


    //
    //console.log('asdasdasdasdasd');

});

/////////////////////////////////////////

app.post('/addinteres', arhImgInteres.single("userfile"), (req, res) => {
    console.log(req.body);
    // let filedata = req.file;
    // console.log(filedata);
    //res.set("Access-Control-Allow-Origin", '*');


    mongoose.connect("mongodb://yura:123456@localhost:27017/website", { useUnifiedTopology: true, useNewUrlParser: true });



    const interes = new Interes({
        name: req.body.name,
        age: req.body.age
    });

    interes.save(function (err) {
        mongoose.disconnect();  // отключение от базы данных

        if (err) return console.log(err);
        console.log("Сохранен объект", razdelinteres);
    });
});

////////////////

/////////

app.post('/addrazdelinteres', arhImgInteres.single("userfile"), (req, res) => {
    console.log(req.body);
    // let filedata = req.file;
    // console.log(filedata);
    res.set("Access-Control-Allow-Origin", '*');


    mongoose.connect("mongodb://yura:123456@localhost:27017/website", { useUnifiedTopology: true, useNewUrlParser: true });



    const razdelinteres = new RazdelInteres({
        name: req.body.name,
        age: req.body.age
    });

    razdelinteres.save(function (err) {
        mongoose.disconnect();  // отключение от базы данных

        if (err) return console.log(err);
        console.log("Сохранен объект", interes);
    });
});

////////////////
app.post('/test', (req, res) => {


    console.log('test');


});

////////////////

/////////////////////

app.get('/admin/spisokservices', (req, res) => {

    //res.set("Access-Control-Allow-Origin", '*');


    // подключение
    mongoose.connect("mongodb://chivic:Pervil-9@127.0.0.1:27017/chivic", { useUnifiedTopology: true, useNewUrlParser: true });


    Service.find(function (err, services) {
        if (err) return console.error(err);
        console.log(services);
        res.send(services);
        mongoose.disconnect();  // отключение от базы данных
    });

    //

});



////////////////

app.post('/admin/addservice', (req, res) => {
    // Функция удаления пробелов(для преобразования стоимости услуги из текста в number)
    function del_spaces(str) {
        str = str.replace(/\s/g, '');
        return str;
    }
    /////////////////////////
    //res.set("Access-Control-Allow-Origin", '*');
    console.log('test/form');


    // // подключение
    mongoose.connect("mongodb://chivic:Pervil-9@127.0.0.1:27017/chivic", { useUnifiedTopology: true, useNewUrlParser: true });
    console.log(req.body.name);
    console.log(req.body.editor);
    console.log(req.body.cena);
    let cena = del_spaces(req.body.cena);
    let cenafinal = Number(cena);
    console.log(cenafinal);

    //const Service = mongoose.model("Service", TestService);
    const addservice = new Service({
        nameService: req.body.name,
        aboutService: req.body.editor,
        minPriceService: cenafinal,

    });

    addservice.save(function (err) {

        Service.find(function (error, services) {
            if (error) return console.error(error);
            //console.log(services);
            res.send(services);
            mongoose.disconnect();  // отключение от базы данных
        });



        if (err) return console.log(err);
        console.log("Сохранен объект", addservice);
        //res.end();
    });
});
////////////////// 
//Удаление service
app.delete('/admin/delservice/:idservice', async (req, res) => {
    let sss = req.params.idservice;
    mongoose.connect("mongodb://chivic:Pervil-9@127.0.0.1:27017/chivic", { useUnifiedTopology: true, useNewUrlParser: true });
    await Service.deleteOne({ _id: sss }, (error, mongooseDeleteResult) => {
        // res.send(mongooseDeleteResult);
        Service.find(function (error, services) {
            if (error) return console.error(error);
            console.log(services);
            res.send([services, mongooseDeleteResult]);
            mongoose.disconnect();  // отключение от базы данных
        });

    });



});


////////////////

////////////////

app.post('/admin/addtehnologe', (req, res) => {

    //res.set("Access-Control-Allow-Origin", '*');
    //console.log('test/form');


    // // подключение
    mongoose.connect("mongodb://chivic:Pervil-9@127.0.0.1:27017/chivic", { useUnifiedTopology: true, useNewUrlParser: true });
    // console.log(req.body.name);
    // console.log(req.body.editor);
    const addtehnologe = new Tehnologe({
        nameTehnologe: req.body.name,
        aboutTehnologe: req.body.editor,


    });

    addtehnologe.save(function (err, saveResult) {
        console.log(saveResult);
        Tehnologe.find(function (error, tehnologes) {
            if (error) return console.error(error);
            //console.log(services);
            res.send([tehnologes, saveResult]);
            mongoose.disconnect();  // отключение от базы данных
        });



        if (err) return console.log(err);
        console.log("Сохранен объект", addtehnologe);
        //res.end();
    });
});
///////////////////////

app.get('/admin/spisoktehnologes', (req, res) => {

    //res.set("Access-Control-Allow-Origin", '*');


    // подключение
    mongoose.connect("mongodb://chivic:Pervil-9@127.0.0.1:27017/chivic", { useUnifiedTopology: true, useNewUrlParser: true });


    Tehnologe.find(function (err, tehnologes) {
        if (err) return console.error(err);
        console.log(tehnologes);
        res.send(tehnologes);
        mongoose.disconnect();  // отключение от базы данных
    });

    //

});


////////////////// 
//Удаление service
app.delete('/admin/deltehnologe/:idtehnologe', async (req, res) => {
    let sss = req.params.idtehnologe;
    //console.log(sss);
    mongoose.connect("mongodb://chivic:Pervil-9@127.0.0.1:27017/chivic", { useUnifiedTopology: true, useNewUrlParser: true });
    await Tehnologe.deleteOne({ _id: sss }, (error, mongooseDeleteResult) => {

        Tehnologe.find(function (error, tehnologes) {
            if (error) return console.error(error);
            console.log(tehnologes);
            res.send([tehnologes, mongooseDeleteResult]);
            mongoose.disconnect();  // отключение от базы данных
        });

    });



});


////////////////


app.post('/form', (req, res) => {

    res.set("Access-Control-Allow-Origin", '*');


    // подключение
    mongoose.connect("mongodb://yura:123456@localhost:27017/users", { useUnifiedTopology: true, useNewUrlParser: true });

    const User = mongoose.model("User", userScheme);
    const user = new User({
        name: req.body.name,
        age: req.body.age
    });

    user.save(function (err) {
        mongoose.disconnect();  // отключение от базы данных

        if (err) return console.log(err);
        console.log("Сохранен объект", user);
    });
});
////////////////// 




/////////////////////

app.get('/users', (req, res) => {

    res.set("Access-Control-Allow-Origin", '*');


    // подключение
    mongoose.connect("mongodb://yura:123456@localhost:27017/users", { useUnifiedTopology: true, useNewUrlParser: true });

    const User = mongoose.model("User", userScheme);
    User.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send(users);
        mongoose.disconnect();  // отключение от базы данных
    })

    //
    console.log('asdasdasdasdasd');

});
/////////////////////

app.post('/multiple-files', (req, res) => {


    res.set("Access-Control-Allow-Origin", 'http://vue.chivic.ru');


    res.send("<h2>Привет Express!</h2>");
    console.log(req.body);
});
// console.log(requ);
// res.send(requ);
app.post('/formform', avatar.single('avatar'), function (req, res) {
    gm(req.file.path)
        .resize(100, 100)
        .write('uploads/avatar/100_' + req.file.originalname, function (err) {
            if (err) console.log(err);
            // destination.txt will be created or overwritten by default.
            // fs.copyFileSync('uploads/avatar/100_' + req.file.originalname, '/var/www/vue/dist/uploads/avatar/100_' + req.file.originalname, (err) => {
            //     if (err) throw err;
            //     console.log('source.txt was copied to destination.txt');

            // });
            // fs.unlink('uploads/avatar/100_' + req.file.originalname, (err) => {
            //     if (err) throw err;

            //     console.log('source.txt удалена из to destination.txt');
            // });
            // fs.unlink('uploads/avatar/' + req.file.originalname, (err) => {
            //     if (err) throw err;

            //     console.log('source.txt удалена из to destination.txt');
            // });
        })








    // const userformScheme = new mongoose.Schema({
    //     name: String,
    //     familiya: String,
    //     pol:String,
    //     about: Array

    // })

    console.log(req.body);
    console.log(req.file.path);



    // res.set("Access-Control-Allow-Origin", '*');


    // подключение
    // mongoose.connect("mongodb://yura:123456@localhost:27017/users", { useUnifiedTopology: true, useNewUrlParser: true });

    //const Userform = mongoose.model("Userform", userformScheme);
    // const userform = new Userform({
    //     name: req.body.name,
    //     age: req.body.age
    // });

    // user.save(function (err) {
    //     mongoose.disconnect();  // отключение от базы данных

    //     if (err) return console.log(err);
    //     console.log("Сохранен объект", user);
    // });
});


//console.log('igor');
//const csv = require('csv-parser');
app.post('/gencsv', upload.single('file'), (req, res) => {

    //для преобразования русских букв в английские не забыть: word = word.toLowerCase();(перевести заглавные в строчные)
    var translet = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
        'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
        'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
        'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
        'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
        'ш': 'sh', 'щ': 'sch', 'ь': '', 'ы': 'y', 'ъ': '',
        'э': 'e', 'ю': 'yu', 'я': 'ya', '.': ''


    };
    res.set('Access-Control-Allow-Origin', '*')
    //console.log(req.body.idgrup);
    console.log(req.file);
    let buffer = req.file.buffer.toString();
    //console.log(buffer);
    let array_buffer = buffer.split('\r\n');
    //console.log(array_buffer);
    // В конце массива - пустой элемент('')
    //удалим
    let array_buffer1 = array_buffer.filter(function (elem) {
        return elem != '';
    });
    //console.log(array_buffer1);
    // let array_buffer1 = array_buffer.map(function (item, i) {
    //     return item.replace(/\r/, '');
    // })
    //let array_str_final = [];
    let array_str = [];

    // console.log(array_buffer1);
    array_buffer1.forEach(function (str, index) {
        let array_str_item = [];

        //каждую строку (кроме первой- которую не добавляем в итоговый массив)преобразуем в массив разделмтель ; (должен совпадать с разделителем в закачиваемом csv файле)
        if (index != 0) {
            let strarr = str.split(';');

            let firstname = strarr[0] + ' ' + strarr[1] + ' ' + strarr[2];
            strarr.push(firstname);
            let lastname = req.body.idgrup;
            strarr.push(lastname);
            //console.log(strarr);
            //преобразуем массив в массив где элементы только из строчных символов
            let strarrlowercase = strarr.map(
                function (a, i) {
                    //транскрипция только не для поля firstname
                    if (i != 4 && i != 5) {
                        let answer = "";

                        a = a.toLowerCase();
                        //Транскрипция
                        for (var i = 0; i < a.length; ++i) {

                            if (translet[a[i]] == undefined) {
                                answer += a[i];
                            } else {
                                answer += translet[a[i]];
                            }
                        }
                        //////////////
                        return answer;
                    }
                    else {
                        return a;
                    }
                }
            );
            console.log(strarrlowercase);
            //оставляем первые буквы(английские) в имени и отчестве
            let strarrlowercaseio = strarrlowercase.map(
                function (a, index) {

                    if (index == 1 || index == 2) {
                        aio = a[0];
                    }
                    else {
                        aio = a
                    }

                    //let answer = "";
                    //a = a.toLowerCase();

                    //////////////
                    return aio;
                }




            );


            array_str.push(strarrlowercaseio);
            //console.log(firstname);
            //array_str.push(firstname);
        }
        //    console.log(array_str);

        //global.firstname;
    });

    //формируем строки финального массива(из которого сформируем csv)
    let array_str_final = array_str.map(function (el, index) {
        // if (index == 0) {
        //     finalel = ['username', 'password', 'firstname', 'lastname', 'email'];
        // }
        // else {

        let username = el[0] + el[1] + el[2] + el[3];
        let firstname = el[4];
        let lastname = el[5];
        let email = username + '@pochta.invalid';
        let password = 123456;
        let finalel = [username, password, firstname, lastname, email];

        return finalel;
    })
    //добавляем 
    array_str_final.unshift(['username', 'password', 'firstname', 'lastname', 'email']);
    ////////////////////////////////////////////////////////

    console.log(array_str_final);
    var str = '';
    for (var i = 0; i < array_str_final.length; i++) {
        let line = '';
        line = array_str_final[i].join(",");
        str += line + '\r\n';
    }
    console.log(str);

    res.send(str);
});


app.listen(3001);


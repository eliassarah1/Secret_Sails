import { useEffect, useState } from "react";


const reminders = (state = [], action) => {

    //  here we should replace all this data by data from backEnd

    const useShareState = () => {

        const [editProfile, setEditProfile] = useState(false);
        const [errorPassEdit, setHandlePassEdit] = useState(false);
        const [hidHomeIntro, sethidHomeIntro] = useState(false);
        const [bottleClassName, setBottleClassName] = useState("")


        const MessageOption = [
            { id: 1, option: "secret" },
            { id: 2, option: "confession" },
            { id: 3, option: "motivation" },
            { id: 4, option: "Diary" }

        ]
        const [userInfo, setUserInfo] = useState({
            userName: "Elias",
            email: "Eliassarah92@gmail.com",
            photo: "",
            password: "12345",
            src: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            country: ""


        })
        // useEffect(() => {

        //     localStorage.setItem('userInfo', JSON.stringify(userInfo)); //changed

        // }, []);

        // const user = JSON.parse(localStorage.getItem('userInfo')) //changed

        const [editProfileData, seteditProfileData] = useState({
            Password: userInfo.password,
            ConfirmPassword: userInfo.password,
            photo: "",
            src: userInfo.src

        });

        const [sendMessagesBox, setSendMessagesBox] = useState([
            {
                id: 1,
                messageText: 'Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice dayv Hello, hope you have a nice day Hello, hope you have a nice day',
                date: "25/4/2023",
                country: 'Syria',
                read: false
            },
            {
                id: 2,
                messageText: 'good night',
                date: "23/4/2023",
                country: 'Germany',
                read: false
            },
            {
                id: 3,
                messageText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere. Sed odio morbi quis commodo. Mi sit amet mauris commodo quis imperdiet massa tincidunt. Tempor orci dapibus ultrices in iaculis nunc sed. Egestas tellus rutrum tellus pellentesque eu. Vitae aliquet nec ullamcorper sit. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Lacus suspendisse faucibus interdum posuere. Sed cras ornare arcu dui vivamus arcu felis bibendum. Vestibulum rhoncus est pellentesque elit. Morbi leo urna molestie at elementum eu facilisis. Purus in mollis nunc sed id semper risus in. Vestibulum rhoncus est pellentesque elit. Nisi est sit amet facilisis magna.\n' +
                    '\n' +
                    'Blandit massa enim nec dui nunc mattis enim. Id volutpat lacus laoreet non curabitur. Nec sagittis aliquam malesuada bibendum arcu. Maecenas sed enim ut sem viverra aliquet eget sit amet. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Non quam lacus suspendisse faucibus interdum. Enim nec dui nunc mattis enim. Risus viverra adipiscing at in tellus integer feugiat scelerisque. Non tellus orci ac auctor augue mauris augue neque gravida. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Morbi non arcu risus quis varius quam quisque. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Adipiscing enim eu turpis egestas pretium. Ultrices in iaculis nunc sed augue. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Eu nisl nunc mi ipsum faucibus vitae aliquet. Nunc eget lorem dolor sed.\n' +
                    '\n' +
                    'Ipsum dolor sit amet consectetur adipiscing elit. Purus semper eget duis at tellus. Tristique sollicitudin nibh sit amet commodo. Venenatis lectus magna fringilla urna. Pharetra vel turpis nunc eget lorem dolor. Nisl rhoncus mattis rhoncus urna neque viverra. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Consectetur lorem donec massa sapien faucibus et molestie. Sit amet cursus sit amet dictum sit amet justo donec. Varius duis at consectetur lorem. Lectus proin nibh nisl condimentum. Velit euismod in pellentesque massa placerat duis ultricies lacus. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Semper quis lectus nulla at volutpat diam ut venenatis tellus.\n' +
                    '\n' +
                    'Nunc sed augue lacus viverra vitae congue. Orci ac auctor augue mauris augue neque. Sit amet consectetur adipiscing elit. Diam in arcu cursus euismod. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Vel facilisis volutpat est velit egestas dui id ornare arcu. Gravida quis blandit turpis cursus in. Blandit turpis cursus in hac habitasse platea. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Id diam vel quam elementum pulvinar etiam non. Pulvinar pellentesque habitant morbi tristique senectus et netus et. Mattis rhoncus urna neque viverra justo nec ultrices dui. Lobortis mattis aliquam faucibus purus in. Nunc aliquet bibendum enim facilisis. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Aliquam ultrices sagittis orci a scelerisque purus. Montes nascetur ridiculus mus mauris vitae ultricies. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.\n' +
                    '\n' +
                    'Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Egestas maecenas pharetra convallis posuere morbi. Sit amet massa vitae tortor condimentum lacinia quis. Sollicitudin nibh sit amet commodo. Sagittis aliquam malesuada bibendum arcu. Semper viverra nam libero justo laoreet sit amet cursus sit. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Aliquam malesuada bibendum arcu vitae elementum curabitur. A diam maecenas sed enim ut sem viverra. Commodo viverra maecenas accumsan lacus vel facilisis volutpat. Adipiscing enim eu turpis egestas pretium. Mauris vitae ultricies leo integer malesuada nunc. Orci a scelerisque purus semper eget duis at tellus.\n' +
                    '\n' +
                    'Semper quis lectus nulla at. Nibh praesent tristique magna sit amet purus gravida quis blandit. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Lacus viverra vitae congue eu consequat ac felis donec et. Varius quam quisque id diam vel quam elementum pulvinar. Cras pulvinar mattis nunc sed. Sit amet consectetur adipiscing elit ut. Sit amet venenatis urna cursus. Ut ornare lectus sit amet est placerat in egestas erat. Cursus in hac habitasse platea. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Amet justo donec enim diam vulputate ut pharetra sit amet. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Vulputate enim nulla aliquet porttitor. Malesuada fames ac turpis egestas maecenas.\n' +
                    '\n' +
                    'Mattis vulputate enim nulla aliquet porttitor lacus. Amet nisl purus in mollis nunc sed id semper. Sed lectus vestibulum mattis ullamcorper. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Lectus quam id leo in vitae turpis massa. Vitae tempus quam pellentesque nec nam. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Ut pharetra sit amet aliquam. Gravida cum sociis natoque penatibus et. Neque egestas congue quisque egestas diam in. Egestas sed tempus urna et pharetra pharetra. Venenatis tellus in metus vulputate eu scelerisque. Ut etiam sit amet nisl purus. Lectus mauris ultrices eros in cursus turpis massa.\n' +
                    '\n' +
                    'Consectetur lorem donec massa sapien faucibus et molestie ac. Non consectetur a erat nam at lectus urna duis. Enim nec dui nunc mattis enim ut tellus. Lectus urna duis convallis convallis tellus id interdum. Libero id faucibus nisl tincidunt eget nullam non nisi. Faucibus ornare suspendisse sed nisi lacus. Aliquet enim tortor at auctor urna nunc id. Ac odio tempor orci dapibus. Id diam maecenas ultricies mi eget mauris. Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Ac tortor dignissim convallis aenean et tortor at risus. Non odio euismod lacinia at quis risus sed vulputate. Sed sed risus pretium quam vulputate dignissim. Vel pretium lectus quam id leo in vitae turpis. Venenatis urna cursus eget nunc.\n' +
                    '\n' +
                    'Justo eget magna fermentum iaculis eu non. Aliquet risus feugiat in ante metus dictum at tempor. Ornare arcu odio ut sem nulla pharetra diam sit. Et molestie ac feugiat sed lectus vestibulum mattis. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Massa sapien faucibus et molestie ac feugiat. Dignissim suspendisse in est ante in. Sed id semper risus in hendrerit gravida. Felis donec et odio pellentesque diam volutpat commodo sed egestas. In cursus turpis massa tincidunt dui ut ornare lectus. Purus gravida quis blandit turpis cursus in hac habitasse. Arcu dictum varius duis at consectetur lorem. Nisl rhoncus mattis rhoncus urna. Rhoncus est pellentesque elit ullamcorper dignissim cras. A pellentesque sit amet porttitor eget dolor morbi.\n' +
                    '\n' +
                    'Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Tortor consequat id porta nibh. Eget arcu dictum varius duis at consectetur. Leo duis ut diam quam nulla porttitor massa. Donec et odio pellentesque diam volutpat commodo sed egestas. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed viverra ipsum nunc aliquet bibendum. Tempus iaculis urna id volutpat lacus laoreet. Sem fringilla ut morbi tincidunt augue interdum velit euismod. A pellentesque sit amet porttitor eget dolor morbi non arcu. In dictum non consectetur a erat nam at lectus. Penatibus et magnis dis parturient. Magnis dis parturient montes nascetur ridiculus mus mauris vitae.\n' +
                    '\n' +
                    'Condimentum id venenatis a condimentum vitae sapien. Enim sit amet venenatis urna cursus eget nunc scelerisque. In aliquam sem fringilla ut morbi tincidunt augue interdum. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Auctor elit sed vulputate mi sit amet mauris commodo quis. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Lectus vestibulum mattis ullamcorper velit sed. At varius vel pharetra vel. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Non tellus orci ac auctor augue.\n' +
                    '\n' +
                    'Consectetur adipiscing elit pellentesque habitant morbi. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Commodo nulla facilisi nullam vehicula ipsum a arcu. Morbi tristique senectus et netus et malesuada. Turpis massa sed elementum tempus egestas sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Sed viverra tellus in hac habitasse. Velit aliquet sagittis id consectetur purus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Massa vitae tortor condimentum lacinia quis vel. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Eget gravida cum sociis natoque penatibus et magnis dis. Sem nulla pharetra diam sit amet nisl suscipit. Sit amet dictum sit amet justo. Nulla malesuada pellentesque elit eget gravida cum sociis.\n' +
                    '\n' +
                    'Sed elementum tempus egestas sed. Est ullamcorper eget nulla facilisi etiam. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. At varius vel pharetra vel turpis nunc eget lorem. In vitae turpis massa sed. Sem et tortor consequat id porta nibh venenatis. Posuere urna nec tincidunt praesent. Aliquet eget sit amet tellus. In arcu cursus euismod quis viverra. Non enim praesent elementum facilisis leo vel fringilla.\n' +
                    '\n' +
                    'Vitae tortor condimentum lacinia quis vel eros donec ac. Libero nunc consequat interdum varius sit amet mattis. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Ut placerat orci nulla pellentesque dignissim enim sit. Sit amet justo donec enim diam vulputate ut pharetra sit. Et leo duis ut diam quam nulla porttitor massa. Sapien pellentesque habitant morbi tristique senectus. Nibh praesent tristique magna sit. Risus in hendrerit gravida rutrum quisque non tellus orci. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Arcu odio ut sem nulla pharetra diam sit. Eget est lorem ipsum dolor sit amet consectetur. Tristique senectus et netus et malesuada fames ac turpis egestas. Ante in nibh mauris cursus mattis. Erat pellentesque adipiscing commodo elit at imperdiet dui. Amet consectetur adipiscing elit ut aliquam purus sit amet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Venenatis lectus magna fringilla urna.\n' +
                    '\n' +
                    'Euismod in pellentesque massa placerat duis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Fermentum posuere urna nec tincidunt praesent semper feugiat. Ac tortor dignissim convallis aenean et. Mattis aliquam faucibus purus in. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Id faucibus nisl tincidunt eget. Eu non diam phasellus vestibulum lorem sed. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Arcu felis bibendum ut tristique et. Gravida cum sociis natoque penatibus et magnis. Mi eget mauris pharetra et.\n' +
                    '\n' +
                    'Lacus vestibulum sed arcu non odio euismod lacinia. Non sodales neque sodales ut. Pretium nibh ipsum consequat nisl. Amet justo donec enim diam vulputate ut pharetra. Ac tortor dignissim convallis aenean et. Aliquam malesuada bibendum arcu vitae elementum curabitur. Egestas tellus rutrum tellus pellentesque eu. Turpis tincidunt id aliquet risus feugiat in ante metus. Netus et malesuada fames ac. Et tortor consequat id porta nibh venenatis cras sed. Facilisis volutpat est velit egestas dui id ornare arcu. Risus ultricies tristique nulla aliquet enim tortor at.\n' +
                    '\n' +
                    'Ut enim blandit volutpat maecenas volutpat blandit. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Laoreet suspendisse interdum consectetur libero. Id aliquet risus feugiat in ante metus dictum at tempor. Dictum sit amet justo donec. Consequat id porta nibh venenatis cras sed felis eget velit. Vitae turpis massa sed elementum tempus egestas sed. Eu sem integer vitae justo eget. Curabitur vitae nunc sed velit dignissim sodales ut eu. Tellus molestie nunc non blandit massa enim nec. Pellentesque eu tincidunt tortor aliquam nulla.\n' +
                    '\n' +
                    'Tortor vitae purus faucibus ornare suspendisse sed nisi. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Egestas dui id ornare arcu odio ut sem. Euismod in pellentesque massa placerat duis ultricies lacus sed. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Tortor dignissim convallis aenean et. Duis convallis convallis tellus id interdum velit. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Eget mauris pharetra et ultrices neque ornare aenean euismod. Aliquam malesuada bibendum arcu vitae elementum. Pellentesque habitant morbi tristique senectus et. In est ante in nibh mauris cursus mattis molestie. Sem et tortor consequat id porta nibh venenatis. Fames ac turpis egestas integer eget aliquet nibh praesent tristique.\n' +
                    '\n' +
                    'Ornare arcu odio ut sem nulla pharetra diam sit amet. Sed risus ultricies tristique nulla aliquet. Sollicitudin ac orci phasellus egestas tellus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Nunc consequat interdum varius sit amet mattis. Lectus sit amet est placerat in egestas erat imperdiet sed. Eu tincidunt tortor aliquam nulla facilisi cras fermentum. Eu scelerisque felis imperdiet proin. Praesent semper feugiat nibh sed. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Sed arcu non odio euismod lacinia at quis.\n' +
                    '\n' +
                    'Scelerisque in dictum non consectetur a. Facilisi cras fermentum odio eu. Tortor condimentum lacinia quis vel eros donec ac odio. Amet luctus venenatis lectus magna fringilla urna porttitor. Nulla aliquet enim tortor at. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Vivamus at augue eget arcu dictum varius. Enim diam vulputate ut pharetra. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Congue nisi vitae suscipit tellus mauris a diam. Leo in vitae turpis massa. Consectetur adipiscing elit duis tristique sollicitudin nibh. Amet nisl purus in mollis nunc sed id semper. Et leo duis ut diam quam nulla porttitor massa. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Sed tempus urna et pharetra.\n' +
                    '\n' +
                    'Urna nec tincidunt praesent semper feugiat nibh. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Vitae tempus quam pellentesque nec nam aliquam sem. Amet aliquam id diam maecenas ultricies mi. Eu turpis egestas pretium aenean pharetra magna ac. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Tristique senectus et netus et malesuada fames. Et magnis dis parturient montes nascetur ridiculus mus mauris vitae. Interdum consectetur libero id faucibus nisl tincidunt. Molestie a iaculis at erat pellentesque adipiscing commodo. Arcu bibendum at varius vel pharetra vel turpis nunc eget.\n' +
                    '\n' +
                    'Consequat id porta nibh venenatis cras sed felis eget velit. Cras ornare arcu dui vivamus. Integer enim neque volutpat ac tincidunt vitae semper quis. Ornare arcu odio ut sem nulla. Diam volutpat commodo sed egestas egestas fringilla. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Id venenatis a condimentum vitae sapien pellentesque. Vitae aliquet nec ullamcorper sit amet risus. Non tellus orci ac auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. In eu mi bibendum neque egestas congue quisque egestas. Nibh sed pulvinar proin gravida hendrerit. Placerat duis ultricies lacus sed turpis tincidunt. Purus gravida quis blandit turpis cursus. Sed libero enim sed faucibus turpis in eu mi. Nunc faucibus a pellentesque sit. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Augue ut lectus arcu bibendum. Vitae justo eget magna fermentum iaculis eu non diam. At augue eget arcu dictum varius duis at consectetur.\n' +
                    '\n' +
                    'Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Bibendum enim facilisis gravida neque. Massa massa ultricies mi quis hendrerit dolor magna. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Pulvinar proin gravida hendrerit lectus. Scelerisque purus semper eget duis at tellus. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Mi bibendum neque egestas congue quisque egestas. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Sed faucibus turpis in eu mi bibendum neque.\n' +
                    '\n' +
                    'Et malesuada fames ac turpis egestas. Lectus vestibulum mattis ullamcorper velit. In hendrerit gravida rutrum quisque non tellus orci. Urna nec tincidunt praesent semper feugiat. Aliquam etiam erat velit scelerisque in dictum. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Dictum at tempor commodo ullamcorper. Non diam phasellus vestibulum lorem sed risus. Dictumst vestibulum rhoncus est pellentesque. Vel pharetra vel turpis nunc eget. Ornare aenean euismod elementum nisi quis eleifend. Aliquet enim tortor at auctor urna nunc. Lacus vestibulum sed arcu non odio euismod lacinia at. Mauris a diam maecenas sed enim ut sem viverra aliquet. Velit euismod in pellentesque massa placerat duis. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Vitae tortor condimentum lacinia quis vel eros. Integer feugiat scelerisque varius morbi enim nunc faucibus.\n' +
                    '\n' +
                    'Aliquam eleifend mi in nulla. Risus quis varius quam quisque id diam vel quam elementum. Gravida dictum fusce ut placerat orci nulla. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Eu consequat ac felis donec et odio pellentesque diam volutpat. Ut enim blandit volutpat maecenas. Duis at tellus at urna condimentum mattis pellentesque id. Nunc sed id semper risus in hendrerit. Nisi porta lorem mollis aliquam ut porttitor. Dui sapien eget mi proin sed. In nibh mauris cursus mattis molestie a iaculis at erat.\n' +
                    '\n' +
                    'Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Eu non diam phasellus vestibulum lorem sed. Euismod elementum nisi quis eleifend quam adipiscing vitae. Pellentesque dignissim enim sit amet venenatis. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Est velit egestas dui id ornare arcu. Odio ut sem nulla pharetra diam sit. Turpis egestas pretium aenean pharetra magna ac. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Ac tortor vitae purus faucibus ornare suspendisse sed nisi. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Feugiat scelerisque varius morbi enim nunc. Massa tincidunt dui ut ornare lectus sit. Sem et tortor consequat id porta nibh venenatis cras sed.\n' +
                    '\n' +
                    'Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Hendrerit dolor magna eget est lorem ipsum. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Sed elementum tempus egestas sed sed. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Non odio euismod lacinia at quis risus. Convallis convallis tellus id interdum. Dui nunc mattis enim ut tellus. Morbi tristique senectus et netus et malesuada fames. Sed ullamcorper morbi tincidunt ornare massa eget egestas. At augue eget arcu dictum. Lacus sed viverra tellus in hac. Eros in cursus turpis massa tincidunt dui ut. Nibh cras pulvinar mattis nunc sed blandit libero volutpat.\n' +
                    '\n' +
                    'Eget aliquet nibh praesent tristique magna. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Justo nec ultrices dui sapien. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Tortor aliquam nulla facilisi cras fermentum. Vestibulum lectus mauris ultrices eros in. Sed id semper risus in hendrerit gravida rutrum quisque. Convallis convallis tellus id interdum. Aliquam etiam erat velit scelerisque in dictum non. Odio euismod lacinia at quis risus sed vulputate. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Neque viverra justo nec ultrices dui. Ultricies mi eget mauris pharetra et. Nisi lacus sed viverra tellus. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Aliquam ultrices sagittis orci a. Tincidunt eget nullam non nisi est sit amet facilisis magna.\n' +
                    '\n' +
                    'Varius vel pharetra vel turpis nunc eget lorem dolor. Mauris in aliquam sem fringilla ut morbi tincidunt. Elementum integer enim neque volutpat ac tincidunt. Viverra mauris in aliquam sem. Aliquet bibendum enim facilisis gravida. Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Arcu non sodales neque sodales ut. Dui sapien eget mi proin sed libero enim sed faucibus. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas erat imperdiet sed euismod. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Aliquam ultrices sagittis orci a scelerisque. Pellentesque dignissim enim sit amet venenatis urna cursus eget.\n' +
                    '\n' +
                    'Mollis aliquam ut porttitor leo a diam. Erat imperdiet sed euismod nisi porta lorem. Purus gravida quis blandit turpis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Ut diam quam nulla porttitor. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Auctor eu augue ut lectus arcu bibendum at. Condimentum vitae sapien pellentesque habitant. Neque volutpat ac tincidunt vitae semper. Nisl nunc mi ipsum faucibus vitae aliquet nec. Ultrices eros in cursus turpis. At augue eget arcu dictum varius. Scelerisque felis imperdiet proin fermentum.\n' +
                    '\n' +
                    'Tellus elementum sagittis vitae et leo duis ut diam. Ipsum dolor sit amet consectetur adipiscing elit duis. Amet mattis vulputate enim nulla aliquet. Vitae et leo duis ut diam. Sit amet consectetur adipiscing elit ut aliquam. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Hac habitasse platea dictumst vestibulum rhoncus est. Orci ac auctor augue mauris augue neque. Amet justo donec enim diam vulputate ut. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed id semper risus in hendrerit.\n' +
                    '\n' +
                    'Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Amet cursus sit amet dictum sit amet justo donec. Purus in mollis nunc sed id semper. Integer quis auctor elit sed vulputate mi sit amet mauris. Etiam sit amet nisl purus in mollis nunc sed. Non diam phasellus vestibulum lorem sed risus ultricies. Integer vitae justo eget magna fermentum iaculis eu. Elementum eu facilisis sed odio morbi quis commodo. Enim eu turpis egestas pretium. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Et egestas quis ipsum suspendisse ultrices gravida. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Sagittis orci a scelerisque purus semper eget duis. Suspendisse faucibus interdum posuere lorem ipsum. Et odio pellentesque diam volutpat commodo sed egestas.\n' +
                    '\n' +
                    'Adipiscing elit pellentesque habitant morbi. Condimentum lacinia quis vel eros donec ac odio tempor. Id aliquet risus feugiat in ante metus dictum at. Viverra mauris in aliquam sem. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Nunc sed velit dignissim sodales. Velit sed ullamcorper morbi tincidunt ornare. Accumsan sit amet nulla facilisi morbi tempus. Massa eget egestas purus viverra accumsan. Sit amet venenatis urna cursus.\n' +
                    '\n' +
                    'Sed felis eget velit aliquet sagittis id consectetur. Diam volutpat commodo sed egestas egestas. In ante metus dictum at tempor commodo ullamcorper a lacus. Lacus luctus accumsan tortor posuere ac ut consequat semper. Enim facilisis gravida neque convallis a. Arcu cursus euismod quis viverra nibh cras pulvinar. Diam vel quam elementum pulvinar etiam. Praesent semper feugiat nibh sed pulvinar proin gravida. Egestas integer eget aliquet nibh praesent. Purus faucibus ornare suspendisse sed nisi lacus. Lacus luctus accumsan tortor posuere ac ut consequat semper. Sagittis id consectetur purus ut. Condimentum lacinia quis vel eros donec ac odio.\n' +
                    '\n' +
                    'Feugiat in ante metus dictum at. Duis at consectetur lorem donec massa sapien faucibus et. Adipiscing bibendum est ultricies integer quis auctor elit. Fringilla ut morbi tincidunt augue. Felis donec et odio pellentesque diam volutpat. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nec dui nunc mattis enim ut tellus elementum sagittis. Egestas erat imperdiet sed euismod nisi. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Rhoncus est pellentesque elit ullamcorper dignissim cras. Ut etiam sit amet nisl purus in mollis. Erat pellentesque adipiscing commodo elit at imperdiet dui. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Sodales ut etiam sit amet nisl. Vulputate eu scelerisque felis imperdiet. Nibh praesent tristique magna sit amet purus gravida quis. In eu mi bibendum neque egestas congue quisque egestas. Sapien eget mi proin sed libero enim sed.\n' +
                    '\n' +
                    'Quam nulla porttitor massa id neque aliquam vestibulum. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Scelerisque eu ultrices vitae auctor eu augue ut. Condimentum mattis pellentesque id nibh tortor id aliquet. Consectetur adipiscing elit duis tristique sollicitudin nibh. Amet nisl purus in mollis nunc. Sed euismod nisi porta lorem mollis aliquam. Orci dapibus ultrices in iaculis nunc sed augue lacus. Eget velit aliquet sagittis id. Sociis natoque penatibus et magnis dis parturient. Faucibus in ornare quam viverra orci sagittis eu volutpat. Libero enim sed faucibus turpis in eu mi bibendum. Enim praesent elementum facilisis leo. Dui ut ornare lectus sit amet est. At augue eget arcu dictum varius duis at consectetur lorem. Dictum fusce ut placerat orci nulla pellentesque. Tellus mauris a diam maecenas sed enim ut sem. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Urna neque viverra justo nec ultrices dui. Enim nec dui nunc mattis enim ut tellus elementum.\n' +
                    '\n' +
                    'Magna eget est lorem ipsum. Tincidunt dui ut ornare lectus sit. Et malesuada fames ac turpis egestas integer eget. Lorem sed risus ultricies tristique nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada. Proin nibh nisl condimentum id venenatis a. Pellentesque sit amet porttitor eget dolor morbi. Neque aliquam vestibulum morbi blandit cursus risus. Vel facilisis volutpat est velit egestas dui id ornare arcu. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Nibh venenatis cras sed felis eget velit aliquet. Quis enim lobortis scelerisque fermentum dui faucibus.\n' +
                    '\n' +
                    'Id porta nibh venenatis cras sed felis. In arcu cursus euismod quis. Arcu non sodales neque sodales ut etiam sit. Sagittis id consectetur purus ut faucibus. Leo vel orci porta non. Quis lectus nulla at volutpat diam ut. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Bibendum est ultricies integer quis auctor. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Sed blandit libero volutpat sed cras ornare arcu dui. Placerat orci nulla pellentesque dignissim enim sit amet venenatis urna. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Massa massa ultricies mi quis.\n' +
                    '\n' +
                    'Consectetur adipiscing elit ut aliquam purus. Eros in cursus turpis massa tincidunt dui ut. Facilisi nullam vehicula ipsum a arcu cursus vitae. Pharetra sit amet aliquam id. Diam quis enim lobortis scelerisque fermentum dui. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Ac tincidunt vitae semper quis lectus nulla. In fermentum et sollicitudin ac orci phasellus. Elit ut aliquam purus sit amet. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Massa sed elementum tempus egestas sed sed risus pretium quam. Sit amet mauris commodo quis imperdiet. Volutpat commodo sed egestas egestas. Sodales ut etiam sit amet nisl purus.\n' +
                    '\n' +
                    'In vitae turpis massa sed elementum. Sodales neque sodales ut etiam sit amet nisl purus in. Volutpat blandit aliquam etiam erat velit. Sed egestas egestas fringilla phasellus faucibus. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Et sollicitudin ac orci phasellus egestas tellus rutrum. Nunc sed blandit libero volutpat sed. Adipiscing diam donec adipiscing tristique risus nec feugiat. In est ante in nibh mauris cursus mattis. Et malesuada fames ac turpis egestas integer eget aliquet. Nunc congue nisi vitae suscipit. Rhoncus est pellentesque elit ullamcorper. Fames ac turpis egestas sed. Praesent elementum facilisis leo vel fringilla est ullamcorper. Nisl pretium fusce id velit ut. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor.\n' +
                    '\n' +
                    'Scelerisque felis imperdiet proin fermentum leo vel. Morbi leo urna molestie at elementum eu facilisis sed odio. Volutpat diam ut venenatis tellus. Fermentum leo vel orci porta non. Nec tincidunt praesent semper feugiat. Cursus in hac habitasse platea dictumst quisque sagittis purus sit. Semper risus in hendrerit gravida rutrum quisque non. Suspendisse faucibus interdum posuere lorem ipsum dolor. Etiam tempor orci eu lobortis elementum nibh. Nibh nisl condimentum id venenatis a. Fringilla est ullamcorper eget nulla. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Vitae auctor eu augue ut lectus arcu bibendum at. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Vitae auctor eu augue ut lectus arcu bibendum.\n' +
                    '\n' +
                    'Ultrices in iaculis nunc sed augue lacus viverra vitae. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Ac ut consequat semper viverra nam libero justo laoreet. Arcu non sodales neque sodales ut. Gravida cum sociis natoque penatibus et magnis dis. Risus nullam eget felis eget nunc lobortis mattis. Dui ut ornare lectus sit amet. In arcu cursus euismod quis viverra nibh. Adipiscing tristique risus nec feugiat in fermentum. Elit sed vulputate mi sit amet mauris commodo quis. In hac habitasse platea dictumst quisque sagittis purus sit amet. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Quis blandit turpis cursus in hac. Purus non enim praesent elementum facilisis leo. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Egestas maecenas pharetra convallis posuere morbi leo. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Scelerisque viverra mauris in aliquam sem fringilla ut morbi.\n' +
                    '\n' +
                    'Integer quis auctor elit sed vulputate mi sit amet mauris. Tortor pretium viverra suspendisse potenti nullam ac tortor. Habitant morbi tristique senectus et. Eget duis at tellus at. Odio aenean sed adipiscing diam donec adipiscing. Adipiscing enim eu turpis egestas. Ipsum dolor sit amet consectetur adipiscing elit ut. Eleifend donec pretium vulputate sapien nec sagittis. Vitae elementum curabitur vitae nunc sed velit dignissim. A iaculis at erat pellentesque adipiscing commodo elit at. Erat imperdiet sed euismod nisi porta lorem. Vitae tempus quam pellentesque nec nam aliquam sem. Amet massa vitae tortor condimentum lacinia quis vel eros donec. Eget sit amet tellus cras adipiscing enim eu turpis. Aliquet risus feugiat in ante metus dictum at tempor. Pharetra massa massa ultricies mi quis.\n' +
                    '\n' +
                    'Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Commodo ullamcorper a lacus vestibulum sed. Aliquet bibendum enim facilisis gravida neque convallis a cras. Mus mauris vitae ultricies leo integer malesuada nunc vel. Amet dictum sit amet justo donec. Dis parturient montes nascetur ridiculus mus. Congue eu consequat ac felis donec et odio pellentesque diam. Ut eu sem integer vitae justo eget. Enim praesent elementum facilisis leo. Sed felis eget velit aliquet. Venenatis cras sed felis eget velit aliquet sagittis. In aliquam sem fringilla ut morbi tincidunt augue. Odio morbi quis commodo odio aenean sed adipiscing diam. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Faucibus pulvinar elementum integer enim neque volutpat ac. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Eget mi proin sed libero enim sed faucibus turpis.\n' +
                    '\n' +
                    'Morbi tincidunt ornare massa eget egestas. Sed id semper risus in hendrerit gravida rutrum. Posuere urna nec tincidunt praesent semper feugiat. Maecenas sed enim ut sem. Quis auctor elit sed vulputate mi sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Accumsan tortor posuere ac ut consequat. Sed viverra tellus in hac habitasse platea. Quisque non tellus orci ac auctor augue mauris augue.\n' +
                    '\n' +
                    'Integer malesuada nunc vel risus commodo viverra maecenas. Mattis rhoncus urna neque viverra justo nec ultrices dui sapien. Ornare aenean euismod elementum nisi quis eleifend. Potenti nullam ac tortor vitae purus faucibus. Id aliquet risus feugiat in ante metus dictum at tempor. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Nisl purus in mollis nunc sed id. At tellus at urna condimentum. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Suspendisse potenti nullam ac tortor vitae purus. Malesuada pellentesque elit eget gravida. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Nisl condimentum id venenatis a. Urna cursus eget nunc scelerisque viverra. Commodo sed egestas egestas fringilla phasellus faucibus. Donec enim diam vulputate ut pharetra sit amet aliquam id. Fusce id velit ut tortor pretium. Volutpat diam ut venenatis tellus in metus vulputate eu. Egestas congue quisque egestas diam.\n' +
                    '\n' +
                    'Sed nisi lacus sed viverra tellus. At risus viverra adipiscing at. Amet commodo nulla facilisi nullam vehicula ipsum a. Id donec ultrices tincidunt arcu non sodales neque sodales ut. Lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor. Adipiscing commodo elit at imperdiet. Enim praesent elementum facilisis leo vel fringilla. Pulvinar neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Ultricies tristique nulla aliquet enim tortor at auctor. Commodo viverra maecenas accumsan lacus vel. Vivamus at augue eget arcu dictum varius duis at consectetur. Etiam sit amet nisl purus in mollis nunc sed id. Id neque aliquam vestibulum morbi blandit cursus risus. Eu consequat ac felis donec et odio pellentesque diam. Mauris augue neque gravida in fermentum et sollicitudin. Tincidunt arcu non sodales neque sodales. Urna cursus eget nunc scelerisque viverra mauris in. Nam at lectus urna duis convallis convallis tellus. Duis ultricies lacus sed turpis tincidunt id.\n' +
                    '\n' +
                    'Tincidunt praesent semper feugiat nibh. In ante metus dictum at. Consequat interdum varius sit amet mattis vulputate enim nulla. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse. Lectus nulla at volutpat diam ut venenatis tellus in metus. Est ullamcorper eget nulla facilisi etiam dignissim. Varius quam quisque id diam vel quam elementum pulvinar etiam. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Non nisi est sit amet facilisis magna etiam tempor orci. A diam sollicitudin tempor id eu nisl nunc mi ipsum.\n' +
                    '\n' +
                    'Ut consequat semper viverra nam libero justo laoreet sit. Sed ullamcorper morbi tincidunt ornare massa eget. At consectetur lorem donec massa sapien faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Vel eros donec ac odio tempor orci dapibus ultrices. At augue eget arcu dictum varius. Duis ultricies lacus sed turpis tincidunt. Nisl vel pretium lectus quam. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Commodo quis imperdiet massa tincidunt. Pulvinar neque laoreet suspendisse interdum consectetur libero. Odio morbi quis commodo odio aenean sed adipiscing. Fermentum leo vel orci porta non.\n' +
                    '\n' +
                    'Enim diam vulputate ut pharetra. Purus ut faucibus pulvinar elementum. Vestibulum sed arcu non odio euismod. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Malesuada bibendum arcu vitae elementum. Arcu dui vivamus arcu felis bibendum ut tristique. Ac tincidunt vitae semper quis lectus. Commodo nulla facilisi nullam vehicula ipsum. Faucibus vitae aliquet nec ullamcorper. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nibh cras pulvinar mattis nunc sed blandit libero volutpat. Posuere lorem ipsum dolor sit amet consectetur. Ridiculus mus mauris vitae ultricies leo integer. Faucibus et molestie ac feugiat sed lectus vestibulum. ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 4,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 5,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 6,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 7,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
        ]);

        const [receivedMessagesBox, setReceivedMessagesBox] = useState([
            {
                id: 1,
                messageText: 'Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice day Hello, hope you have a nice dayv Hello, hope you have a nice day Hello, hope you have a nice day',
                date: "25/4/2023",
                country: 'Syria',
                read: false
            },
            {
                id: 2,
                messageText: 'good night',
                date: "23/4/2023",
                country: 'Germany',
                read: false
            },
            {
                id: 3,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 4,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 5,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 6,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },
            {
                id: 7,
                messageText: 'I have a good friends in my country , i hope you have a friend in your country  ',
                date: "22/4/2023",
                country: 'Sadui',
                read: false
            },

        ]);



        return {
            sendMessagesBox, setSendMessagesBox,
            receivedMessagesBox, setReceivedMessagesBox,
            MessageOption,
            userInfo, setUserInfo,
            editProfile, setEditProfile,
            editProfileData, seteditProfileData,
            errorPassEdit, setHandlePassEdit,
            hidHomeIntro, sethidHomeIntro,
            bottleClassName, setBottleClassName

        }
    }




    const data = {

        useShareState,
    }




    return data;

}

export default reminders
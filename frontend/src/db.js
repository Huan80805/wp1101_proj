const user = [
{
    id:'1',
    userName:'GoGoPete',
    department:'Econ',
    EmailAdress:'gogo@kmail.com',
    password:'1234'
},
{
    id:'2',
    userName:'Captian Cook',
    department:'Chem',
    EmailAdress:'cook@kmail.com',
    password:'2134'
},
{
    id:'3',
    userName:'Mr.White',
    department:'Chem',
    EmailAdress:'ice@kmail.com',
    password:'3433'
},
{
    id:'4',
    userName:'Ric',
    department:'EE',
    EmailAdress:'ee@kmail.com',
    password:'ee11'
}
];

const club = [
{
    id:'1',
    name:'Dance',
    meetingTime:'every Monday',
    abstract:'People like dance',
    founder:'Ric',
    foundingTime:'2022-01-05',
    foundingClubID:'1',
    invitaionCode:'DANCE',
    groupMenberId:['1', '3'],
    adminId:['1']
},
{
    id:'2',
    name:'Cook Club',
    meetingTime:'every Monday and Thursday',
    abstract:'People like cook',
    founder:'Captian Cook',
    foundingTime:'2022-01-05',
    foundingClubID:'1',
    invitaionCode:'cookisfun',
    groupMenberId:['3', '4'],
    adminId:['4']
},
{
    id:'3',
    name:'Piano',
    meetingTime:'everyday',
    abstract:'playing anime song everyday',
    founder:'Mr.White',
    foundingTime:'2022-01-05',
    foundingClubID:'2',
    invitaionCode:'ramen',
    groupMenberId:['1'],
    adminId:['1']
},
{
    id:'4',
    name:'Movie Club',
    meetingTime:'every Friday',
    abstract:'Friday Movie Night!',
    founder:'Ric',
    foundingTime:'2022-01-05',
    foundingClubID:'3',
    invitaionCode:'Movie',
    groupMenberId:['2', '3', '4'],
    adminId:['2','3']
}
];

const activities = [
{
    id:'1',
    date:'2022-05-02',
    location:'NTU Libray',
    abstract:'Go studying',
    clubId:'1',
    initiatorID:'1',
    menber:['1'],
    numPeople:'1',
    status:'Active'
},
{
    id:'2',
    date:'2022-05-05',
    location:'club room',
    abstract:'playing board game',
    clubId:'1',
    initiatorID:'1',
    menber:['1', '3'],
    numPeople:'2',
    status:'Active'
},
{
    id:'3',
    date:'2022-05-03',
    location:'student corner',
    abstract:'Go studying',
    clubId:'1',
    initiatorID:'3',
    menber:['1', '3'],
    numPeople:'2',
    status:'Active'
},
{
    id:'4',
    date:'2022-05-02',
    location:'college of Scocial Science',
    abstract:'Discuss Envents',
    clubId:'2',
    initiatorID:'3',
    menber:['3', '4'],
    numPeople:'2',
    status:'Active'
},
{
    id:'5',
    date:'2022-05-02',
    location:'MT.YanMing',
    abstract:'Go hicking!',
    clubId:'2',
    initiatorID:'4',
    menber:['4'],
    numPeople:'1',
    status:'Active'
}
]

const db = {
    user,
    club,
    activities,
};

export { db as default };

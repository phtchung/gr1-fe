export const sidebarItem = [
    {name : 'Overview' , icon : 'HiChartPie',path:'#'},
    {name : 'Task List' , icon : 'HiChartPie',path:'#'},
    {name : 'Search Task' , icon : 'HiChartPie',path:'#'},
    {name : 'User' , icon : 'HiChartPie',path:'#'},
    {name : 'Log out' , icon : 'HiChartPie',path:'#'},
];

export const progresses = [
    {key : '0%' , value : 0},
    {key : '20%' , value : 20},
    {key : '40%' , value : 40},
    {key : '60%' , value : 60},
    {key : '80%' , value : 80},
    {key : '100%' , value : 100},
];


export const todayTasks = [
    {id : 1 , task_name :'Làm GR1', state:'Todo',date_start :'23/07/2023' , date_end:'25/7/2023',is_important:false},
    {id : 2 , task_name :'Làm Nhúng dùm ', state:'Inprogress',date_start :'22/07/2023' , date_end:'27/7/2023',is_important:true},
    {id : 3 , task_name :'Làm Nhật 8 ', state:'Inprogress',date_start :'24/07/2023' , date_end:'28/7/2023',is_important:false},
    {id : 4 , task_name :'Làm Backend ', state:'Todo',date_start :'22/07/2023' , date_end:'27/7/2023',is_important:true},
    {id : 5 , task_name :'Làm Hệ phân tán', state:'Todo',date_start :'29/07/2023' , date_end:'4/8/2023',is_important:false},
    {id : 6 , task_name :'Làm Hệ Đa tán', state:'Todo',date_start :'23/07/2023' , date_end:'4/8/2023',is_important:false},
]

export const detailTask = {id : 1 , taskName :'Làm GR1', state:'Done',dateStart :'07/23/2023' , dateEnd:'07/25/2023',taskImportant:0,description:'lười vl học dùm 1'}

export const checkListArrs = [
    {id : 1 , parent_id : 1 , title :'Làm GR1', progress:20 , dateEnd:'07/24/2023',note:'alo alo note'},
    {id : 2 , parent_id : 1 , title :'Làm nhungs', progress:40 , dateEnd:'07/31/2023',note:'alo  note'},
    {id : 3 , parent_id : 1 , title :'Làm nhaajt', progress:100 , dateEnd:'08/01/2023',note:'alo  '},
    {id : 4 , parent_id : 1 , title :'Làm hoa hoc', progress:60 , dateEnd:'07/30/2023',note:'alo  1'},
]

export const state = {Todo : 'Todo',Inprogress :'Inprogress',Done :'Done'}
export const stateFilter = {Todo : 'Todo',Inprogress :'Inprogress',Done :'Done',All:'All'}
export const permission = {0:'Chỉ xem',1:'Chỉnh sửa'}


export const user =
    {   user_id : 1 , name:'Phạm Chung',email:'phamthanhchung2001@gmail.com',phone_number:'0971751698',role:0,address:"",
        profile_url:'',gender:'Nam' , birthday:'2001-06-18',about:'Thích xem bóng chuyền'}

export const toDoTaskList = [
    {id:1,task_name:'Làm Gr1',state:'Todo',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-21',date_end:'2023-07-29',is_notify:true,control:1,is_important:false},
    {id:2,task_name:'Làm nhúng đi',state:'Todo',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-24',date_end:'2023-07-31',is_notify:true,control:1,is_important:true}

]

export const inProgressTaskList = [
    {id:3,task_name:'Làm Gr2',state:'Inprogress',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-29',date_end:'2023-07-30',is_notify:true,control:1,is_important:false},
    {id:4,task_name:'Làm nhúng ',state:'Inprogress',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-24',date_end:'2023-08-07',is_notify:true,control:1,is_important:true},
    {id:5,task_name:'Làm hệ phân tán ',state:'Inprogress',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-24',date_end:'2023-08-07',is_notify:true,control:1,is_important:true}

]

export const doneTaskList = [
    {id:3,task_name:'Làm Gr2',state:'Done',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-29',date_end:'2023-07-30',is_notify:true,control:1,is_important:false},
    {id:4,task_name:'Làm nhúng ',state:'Done',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-24',date_end:'2023-08-07',is_notify:true,control:1,is_important:true},
    {id:5,task_name:'Làm hệ phân tán ',state:'Done',description:'Làm nhanh dùm lẹ ',date_start:'2023-07-24',date_end:'2023-08-07',is_notify:true,control:1,is_important:true}

]

export const overViewData = {
    totalTask :15 , taskDone : 10 ,importantTask :2
}

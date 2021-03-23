import { EmailType } from '@/types/puddle';

let list: EmailType[] = [
  {
    date: '2016-05-07',
    sendAt: 'love0@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
  {
    date: '2016-05-03',
    sendAt: 'love1@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
  {
    date: '2016-05-02',
    sendAt: 'love2@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
  {
    date: '2016-05-04',
    sendAt: 'love3@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
  {
    date: '2016-05-01',
    sendAt: 'love4@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
  {
    date: '2016-05-08',
    sendAt: 'love5@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
  {
    date: '2016-05-06',
    sendAt: 'love6@gmail.com',
    subject: '上海市普陀区金沙江路 1518 弄',
    desc: '(@^0^@)/',
    isArchive: false,
  },
];

export const state = () => ({
  list,
});

// export const getters = {
//   getterValue: state => {
//     return state.value
//   }
// }

export const mutations = {
  updateArchive: (state, { index, flag }) => {
    state.list[index].isArchive = flag;
  },
};

// export const actions = {
//   updateActionValue({ commit }) {
//     commit('updateValue', payload)
//   }
// }

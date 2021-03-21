import { EmailType } from '@/types/puddle';

export default {
  data() {
    let dialogEmail: EmailType = {
      date: '',
      sendAt: '',
      subject: '',
      desc: '',
      isArchive: false,
    };
    return {
      dialogEmail,
    };
  },
  methods: {
    handleEmailClick(email: EmailType) {
      this.dialogEmail = email;
      this.dialogFlag = true;
    },
  },
};

const fromOps1 = {
    color: "lightblue",
    sender: "Divy",
    time: "12:00 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Hey Bruno, Thank you for reaching out. Our Home Manager, Steve, would be happy to take care of the handyperson tasks around your home. While we're there, would you also be interested in a complimentary home consultation visit so you can offload any to-do lists and we can provide recommendations to fix any issues that you need taken care of around your home?"
  };

const fromClient1 = {
    color: "",
    sender: "Bruno Soares",
    time: "12:05 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Hey Divy, We really appreciate Steve coming out on such short notice. We would love a home consultation visit - can he also repair the weatherstripping on our front door? I will not be home but Setter has my lockbox code. I'm unable to attach a photo via the app so I'm sending an email instead."
  };

  const fromClient2 = {
    color: "",
    sender: "Bruno Soares",
    time: "12:07 PM",
    date: "Dec 12",
    comm: "sms",
    content: "Here is a photo of my existing front door [insert link here]"
  };

  const fromOps2 = {
    color: "lightblue",
    sender: "Divy",
    time: "1:00 PM",
    date: "Dec 12",
    comm: "email",
    content: "Hey Bruno, Steve can certainly tackle that for you during the visit. We provide him with the access instructions as well as circle back with an update after the visit. "
  };

  const fromOps3 = {
    color: "lightblue",
    sender: "Meghna",
    time: "3:00 PM",
    date: "Dec 12",
    comm: "email",
    content: "Steve let us know that the visit went really well and we're excited to take care of this for you! I'm currently working through consolidating the quotes and will be circling back with detailed quotes within the next day or so. I have also attached the photos of the completed weatherstripping work during his visit today "
  };
  
  export const clientConversation = [fromOps1, fromClient1, fromClient2, fromOps2, fromOps3];

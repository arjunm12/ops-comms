const fromOps1 = {
  color: "lightblue",
  sender: "Divy",
  time: "12:15 PM",
  date: "Dec 12",
  comm: "email",
  content: "Hey Steve, it’s Divy. Bruno requested a home consultation visit & would also like to have the weatherstripping on his front door replaced. [Attached image here]. Can you drop by home depot for the weatherstripping and send me the receipt? Bruno’s lockbox code is 3465. "
};

const fromPro1 = {
  color: "lightgoldenrodyellow",
  sender: "Steve Hache",
  time: "12:45 PM",
  date: "Dec 12",
  comm: "sms",
  content: "Hey Divy, I can definitely take care of that. I will let you know how the visit goes! "
};

const fromPro2 = {
  color: "lightgoldenrodyellow",
  sender: "Steve Hache",
  time: "2:45 PM",
  date: "Dec 12",
  comm: "sms",
  content: "Hey Divy, the visit went well. Here is a photo of the completed work [Attached image here]. I will be dropping by the office to discuss the remaining work from the home consultation visit. Let me know if you have any questions!"
};

export const proConversation = [fromOps, fromPro1, fromPro2];

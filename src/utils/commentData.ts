import { CommentProps } from "../types/commentTab";

export const comments: CommentProps[] = [
  {
    id: 1,
    username: "Ronald Richards",
    avatar: "../../CommentAvatar/ronald_avatar.svg",
    timeAgo: "1 week ago",
    content:
      "Moeccenas risus tortor, tincidunt nec purus quis, gravida suscipit tortor.",
    replies: [
      {
        id: 2,
        username: "Kristin Watson",
        avatar: "../../CommentAvatar/kristin_avatar.svg",
        role: "ADMIN",
        timeAgo: "1 week ago",
        content:
          "Nulla pellentesque leo vitae lorem hendrerit, sit amet elementum ipsum rutrum. Morbi ultricies volutpat orci quis fringilla. Suspendisse faucibus egestas quis dictum egestas.",
      },
      {
        id: 3,
        username: "Cody Fisher",
        avatar: "../../CommentAvatar/cody_avatar.svg",
        timeAgo: "1 week ago",
        content: "Thank you so much sir, you're a great mentor. 🙌🙌🙌",
      },
    ],
  },
  {
    id: 4,
    username: "Guy Hawkins",
    avatar: "../../CommentAvatar/guy_avatar.svg",
    timeAgo: "2 weeks ago",
    content:
      "Thank you for your helpful video. May I ask what is the application use to demo the animation at [4:24], is it the runnable mobile application?",
    replies: [
      {
        id: 5,
        username: "Kristin Watson",
        avatar: "../../CommentAvatar/kristin_avatar.svg",
        role: "ADMIN",
        timeAgo: "1 week ago",
        content: "As what I know, Figma Mirror app cannot do that. Please help me.",
      },
    ],
  },
  {
    id: 6,
    username: "Esther Howard",
    avatar: "../../CommentAvatar/ester_avatar.svg",
    timeAgo: "2 weeks ago",
    content: "Quality content 🔥",
  },
  {
    id: 7,
    username: "Theresa Webb",
    avatar: "../../CommentAvatar/theresa_avatar.svg",
    timeAgo: "3 weeks ago",
    content:
      "Now I know that I will spent that 5 minutes of my life with pure pleasure",
  },
  {
    id: 8,
    username: "Marvin McKinney",
    avatar: "../../CommentAvatar/marvin_avatar.svg",
    timeAgo: "3 weeks ago",
    content:
      "Great tutorial! I'm subscribing. I'm just wondering if this is feasible to be materialized in a real project or can be integrated in an actual app code?",
  },
  {
    id: 9,
    username: "Darel Steward",
    avatar: "../../CommentAvatar/darel_avatar.svg",
    timeAgo: "4 weeks ago",
    content:
      "Awesome video. Sometimes, we have to get rid by path and the possibilities of designs and not be bounded by codes. The fact that the designed file is part from the norm, it is only expected that its code is well executed, but also well thinking out of the box. That is what differentiates yourself from others who are just building on top of someone else's code.",
  },
  {
    id: 10,
    username: "Floyd Miles",
    avatar: "../../CommentAvatar/floyd_avatar.svg",
    timeAgo: "4 weeks ago",
    content: "I really hope you make some series out of this UI + AE tutorials :)",
  },
  {
    id: 11,
    username: "Courtney Henry",
    avatar: "../../CommentAvatar/courtney_henry_avatar.svg",
    timeAgo: "4 weeks ago",
    content: "Hearing this while being a frontend programmer.",
  },
];

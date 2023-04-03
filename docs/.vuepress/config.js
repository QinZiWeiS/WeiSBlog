//
module.exports = {
  // 网站 Title
  title: "维维梓的博客 ｜ WeiS Blog",
  // 网站描述
  description: "个人博客",

  // 网站 favicon 图标设置等
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  // 使用的主题
  theme: "melodydl",

  // 主题配置
  themeConfig: {
    title: "WeiS Blog",

    // 个人信息（没有或不想设置的，删掉对应字段即可）
    personalInfo: {
      // 名称
      name: "维维梓",

      // 头像 public文件夹下
      avatar: "/avatar.jpg",

      // 头部背景图
      // headerBackgroundImg: "/avatar-bg.png",

      // 个人简介 (支持 HTML)
      description: "一个爱说唱的程序员",

      // 电子邮箱
      email: "2201553139@qq.com",

      // 所在地
      location: "Shanghai, China",
    },
    // 顶部导航栏内容
    nav: [
      { text: "HOME", link: "/" },
      { text: "ABOUT", link: "/about/" },
      { text: "TAGS", link: "/tags/" },
    ],

    // 首页头部标题背景图设置，图片直接放在 public 文件夹下
    header: {
      home: {
        title: "WeiS Blog",
        subtitle: "好好生活，慢慢相遇",
        // headerImage: '/home-bg.jpeg'
      },

      // tag页面头部标题背景图设置，图片直接放在 public 文件夹下
      tags: {
        title: "Tags",
        subtitle: "相信一切都会变好的",
        // headerImage: '/tags-bg.jpg'
      },

      // 文章详情头部背景图
      //   postHeaderImg: '/post-bg.jpeg',
    },

    // 社交平台帐号信息
    sns: {
      github: {
        account: "github",
        link: "https://github.com/QinZiWeiS",
      },
    },
    // 底部 footer 的相关设置
    footer: {
      // gitbutton  配置
      gitbtn: {
        // 仓库地址
        repository: "https://github.com/QinZiWeiS/QinZiWeiS.github.io",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px",
      },

      // 添加自定义 footer
      custom: `Copyright &copy; WeiS Blog 2023`,
    },

    // 分页配置
    pagination: {
      // 每页文章数量
      perPage: 5,
    },

    // vssue 评论配置, 如果不需要，可以设置 comments: false
    comments: false,
  },
};

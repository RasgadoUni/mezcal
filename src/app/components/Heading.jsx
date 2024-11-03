import React from "react";

const sizes = {
    textmd: "text-[25px] font-medium md:text-[23px] sm:text-[21px]",
    text2xl: "text-[36px] font-medium md:text-[34px] sm:text-[32px]",
    text3xl: "text-[48px] font-medium md:text-[44px] sm:text-[38px]",
    text4xl: "text-[64px] font-medium md:text-[48px] ",
    headingxs: "text-[11px] font-black",
    headings: "text-[15px] font-black",
    headingmd: "text-[16px] font-bold",
    headinglg: "text-[20px] font-semibold",
    headingxl: "text-[24px] font-black md:text-[22px]",
    heading2xl: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
    heading3xl: "text-[35px] font-bold md:text-[33px] sm:text-[31px]",
    heading4xl: "text-[38px] font-bold italic md:text-[36px] sm:text-[34px]",
    heading5xl: "text-[40px] font-bold md:text-[38px] sm:text-[36px]",
    heading6xl: "text-[80px] font-semibold italic md:text-[48px]",
    heading7xl: "text-[150px] font-bold md:text-[48px]"
  };
  
const Heading = ({ children, className = "", size = "headinglg", as, ...restProps }) => {
    const Component = as || "h6";
  
    return (
        <Component className={`text-deep_orange-50 font-kanit ${className} ${sizes[size]}`} {...restProps} >
            {children}
        </Component>
    );
};

export{ Heading };
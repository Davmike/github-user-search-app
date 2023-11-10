import { useState } from "react";
import React from "react";
import SvgSun from "../../public/assets/icon-sun.svg";
import SvgSearch from "../../public/assets/icon-search.svg";
import SvgLogo from "../../public/assets/Oval.svg";
import SvgLocation from "../../public/assets/icon-location.svg";
import SvgLink from "../../public/assets/icon-website.svg";
import SvgTwitter from "../../public/assets/icon-twitter.svg";
import SvgCompany from "../../public/assets/icon-company.svg";
import SvgMoon from "../../public/assets/icon-moon.svg";

export default function Search({ dark, setDark }) {
  return (
    <div className="flex flex-col justify-center min-h-[100vh] items-center px-[24px] pt-[31px] pb-[79px]">
      <div className="flex justify-between items-center w-[327px] md:w-[573px] xl:w-[730px]">
        <h1
          className={`${
            dark ? "text-[white]" : "text-[#222731]"
          } text-[26px] font-bold transition duration-1000 ease-in-out`}
        >
          devfinder
        </h1>
        <div
          className="flex gap-[16px]"
          onClick={() => {
            setDark(!dark);
          }}
        >
          <h3
            className={`${
              dark ? "text-[white]" : "text-[#4B6A9B]"
            } text-[13px] font-bold`}
          >
            LIGHT
          </h3>
          <img src={dark ? SvgSun : SvgMoon} alt="sun svg" />
        </div>
      </div>

      <div
        className={`${
          dark ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
        } rounded-[15px] flex mt-[35px] w-[327px] h-[60px] md:w-[573px] xl:w-[730px] transition duration-1000 ease-in-out`}
      >
        <img
          className="2-[20px] h-[20px] mt-[20px] ml-[16px] mr-[9px]"
          src={SvgSearch}
          alt="search svg"
        />
        <input
          className={`${
            dark ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
          } outline-none text-[white] text-[13px] w-[184px] mr-[7px] placeholder:text-[13px] font-normal transition duration-1000 ease-in-out`}
          type="text"
          placeholder="Search GitHub username…"
        />
        <button className="bg-[#0079FF] rounded-[10px] font-bold text-[14px] text-[white] mt-[7px] mr-[7px] w-[86px] h-[46px] transition duration-1000 ease-in-out">
          Search
        </button>
      </div>

      <div
        className={`${
          dark ? "bg-[#1E2A47]" : "bg-[#FEFEFE]"
        } mt-[16px] pt-[32px] pb-[48px] px-[24px] rounded-[15px] md:w-[573px] md:h-[481px] md:px-[40px] md:pt-[40px] md:pb-[44px] xl:w-[730px] xl:h-[444px] transition duration-1000 ease-in-out`}
      >
        <div className="flex gap-[19.5px]">
          <img
            className="md:w-[117px] md:h-[117px]"
            src={SvgLogo}
            alt="logo svg"
          />
          <div className="md:ml-[20px] md:mt-[10px] xl:flex xl:justify-between xl:w-[100%] xl:mt-[0]">
            <div>
              <h3
                className={`${
                  dark ? "text-[white]" : "text-[#2B3442]"
                } text-[16px] font-bold md:text-[26px] transition duration-1000 ease-in-out`}
              >
                The Octocat
              </h3>
              <p className="text-[#0079FF] text-[13px] font-normal md:text-[16px] transition duration-1000 ease-in-out">
                @octocat
              </p>
            </div>
            <p
              className={`${
                dark ? "text-[white]" : "text-[#697C9A]"
              } text-[13px] font-normal mt-[6px] md:text-[15px] transition duration-1000 ease-in-out`}
            >
              Joined 25 Jan 2011
            </p>
          </div>
        </div>

        <div className="xl:pl-[158px]">
          <p
            className={`w-[279px] h-[75px] mt-[34px] ${
              dark ? "text-[white]" : "text-[#4B6A9B]"
            } text-[13px] font-normal leading-[25px] md:text-[15px] md:w-[493px] xl:mt-[-34px] transition duration-1000 ease-in-out`}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>

          <div
            className={`flex flex-row items-center ${
              dark ? "bg-[#141D2F]" : "bg-[#F6F8FF]"
            } rounded-[10px] w-[279px] h-[85px] mt-[23px] md:mt-[0] md:w-[493px] md:gap-[70px] xl:w-[480px] xl:h-[85px] transition duration-1000 ease-in-out`}
          >
            <div className="flex flex-col items-center w-[89px] h-[48px] gap-[8px] md:items-start md:ml-[20px] md:gap-[2px]">
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                } font-normal text-[11px] md:text-[13px] transition duration-1000 ease-in-out`}
              >
                Repos
              </p>
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#2B3442]"
                } font-bold text-[16px] md:text-[22px] transition duration-1000 ease-in-out`}
              >
                8
              </p>
            </div>
            <div className="flex flex-col items-center w-[89px] h-[48px] gap-[8px] md:items-start md:gap-[2px]">
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                }  font-normal text-[11px] md:text-[13px] transition duration-1000 ease-in-out`}
              >
                Followers
              </p>
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#2B3442]"
                } font-bold text-[16px] md:text-[22px] transition duration-1000 ease-in-out`}
              >
                3938
              </p>
            </div>
            <div className="flex flex-col items-center w-[89px] h-[48px] gap-[8px] md:items-start md:gap-[2px]">
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                }  font-normal text-[11px] md:text-[13px] transition duration-1000 ease-in-out`}
              >
                Following
              </p>
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#2B3442]"
                } font-bold text-[16px] md:text-[22px] transition duration-1000 ease-in-out`}
              >
                9
              </p>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:mt-[10px] xl:mt-[15px]">
            <div className="flex gap-[19px] mt-[24px]">
              <img src={SvgLocation} alt="location svg" />
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                } text-[13px] font-normal md:text-[15px] transition duration-1000 ease-in-out`}
              >
                San Francisco
              </p>
            </div>
            <div className="flex gap-[13px] mt-[17px]">
              <img src={SvgLink} alt="link svg" />
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                } text-[13px] font-normal md:text-[15px] transition duration-1000 ease-in-out`}
              >
                https://github.blog
              </p>
            </div>
            <div className="flex gap-[13px] mt-[17px]">
              <img src={SvgTwitter} alt="twitter svg" />
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                } text-[13px] font-normal md:text-[15px] transition duration-1000 ease-in-out`}
              >
                Not Available
              </p>
            </div>
            <div className="flex gap-[13px] mt-[16px]">
              <img src={SvgCompany} alt="company svg" />
              <p
                className={`${
                  dark ? "text-[white]" : "text-[#4B6A9B]"
                } text-[13px] font-normal md:text-[15px] transition duration-1000 ease-in-out`}
              >
                @github
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { getUserInfo } from "@/lib/actions/user.action";
import { URLProps } from "@/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, auth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatDate } from "@/lib/utils";
import ProfileLink from "@/components/shared/ProfileLink";
import Stats from "@/components/shared/Stats";
import QuestionsTab from "@/components/shared/QuestionsTab";
import AnswersTab from "@/components/shared/AnswersTab";

const page = async ({ params, searchParams }: URLProps) => {
  const userInfo = await getUserInfo({ userId: params.id });
  const { userId } = auth();
  return (
    <>
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Image
            src={userInfo.user.picture}
            alt="profile picture"
            width={140}
            height={140}
            className="rounded-full object-cover"
          />

          <div className="mt-3">
            <h2 className="h2-bold text-dark100_light900">
              {userInfo.user.name}
            </h2>
            <p className="paragraph-regular text-dark200_light800">
              @{userInfo.user.username}
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              {userInfo.user.portfolio && (
                <ProfileLink
                  imgUrl="/assets/icons/link.svg"
                  href={userInfo.user.portfolio}
                  title="Portfolio"
                />
              )}
              {userInfo.user.location && (
                <ProfileLink
                  imgUrl="/assets/icons/location.svg"
                  title={userInfo.user.location}
                />
              )}
              <ProfileLink
                imgUrl="/assets/icons/location.svg"
                title={formatDate(userInfo.user.joinedAt)}
              />
            </div>
            {userInfo.user.bio && (
              <p className="paragraph-regular text-dark400_light800 mt-8">
                {userInfo.user.bio}
              </p>
            )}
          </div>
        </div>
        <div className="flex max-sm:mb-5 max-sm:w-full sm:mt-3">
          <SignedIn>
            {userInfo.user.clerkId === userId && (
              <Link href="/profile/edit">
                <Button
                  className="paragraph-medium btn-secondary 
                    text-dark300_light900 min-h-[46px] min-w-[175px] px-4 py-3"
                >
                  Edit Profile
                </Button>
              </Link>
            )}
          </SignedIn>
        </div>
      </div>
      <Stats
        totalQuestions={userInfo.totalQuestions}
        totalAnswers={userInfo.totalAnswers}
        badges={userInfo.badges}
      />
      <div className="mt-10 flex gap-10">
        <Tabs defaultValue="top-posts" className="">
          <TabsList className="background-light800_dark400 min-h-[42px] p-1">
            <TabsTrigger value="top-posts" className="tab">
              Top Posts
            </TabsTrigger>
            <TabsTrigger value="answers" className="tab">
              Answers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="top-posts">
            <QuestionsTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={userId}
            />
          </TabsContent>
          <TabsContent value="answers">
            <AnswersTab
              searchParams={searchParams}
              userId={userInfo.user._id}
              clerkId={userId}
            />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;

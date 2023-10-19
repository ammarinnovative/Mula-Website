import React, { useState } from 'react';
import { Container, Heading, Stack, Text } from '@chakra-ui/react';

import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';

export default function Privacypolicy() {
  return (
    <div>
      <Stack
        width={'100%'}
        minH={'100vh'}
        maxH={'auto'}
        position={'relative'}
        backgroundColor={'#00000f'}
      >
        <Container maxW={'8xl'}>
          <Stack
            backgroundColor={'#00000f'}
            padding={'200px 0 70px '}
            width={'100%'}
          >
            <Text
              textAlign={'center'}
              mb={{ base: '0px', md: '25px' }}
              mt={{ base: 'none', md: '-15px' }}
              fontWeight={'700'}
              fontSize={{ base: '27px', md: '35px', lg: '40px' }}
              color={'white'}
            >
              Support
            </Text>
          </Stack>

          <Stack mb={'24'} gap={4}>
            <Heading fontSize={'30px'} color={'#fff'}>
              About The Policy
            </Heading>
            <Text color={'#cfcece'}>
            Welcome to Mula Membership Support, your go-to resource for navigating the Mula Membership app. Our platform is dedicated to empowering individuals globally, helping them harness their entrepreneurial potential and succeed in their ventures.
Mula Membership is designed to provide you with regularly updated video content focused on entrepreneurship. Our app offers subscription-based access to a range of courses and consultations, allowing you to tailor your learning to suit your goals.
This page serves as a comprehensive guide, offering clear insights into app navigation and providing essential information to optimize your entrepreneurial learning experience.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Getting Started
            </Heading>
            <Text color={'#cfcece'}>
            Once you have downloaded and launched the Mula Membership app on your mobile device, you can now get started by signing up.
            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
             Create An Account
            </Heading>
            <Text color={'#cfcece'}>
            To join Mula Membership, complete the registration process by following these steps:
On the home screen, find and click on the "Sign Up" button.
Enter your email address, which will be used for account verification. A one-time password (OTP) will be sent to this email.
Select a unique username, preferably one that hasn't been used before by another user.
 Create a strong, alphanumeric password for your account.
 Check your email inbox for the OTP. Enter this OTP in the app to verify your email.
 Once you've entered all required details, click on "Sign Up" to complete the registration process.
            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
         Forgot Password
            </Heading>
            <Text color={'#cfcece'}>
            If you have forgotten your password, you can easily recover your account by following these steps:
While on the login page, click on the "Forgot Password?" link located below the login button.
Enter your registered email address or phone number and click on "Request OTP"
 An OTP will be sent to the provided email address or phone number.
 Enter the OTP in the designated field labeled "Enter OTP code" and click on "Submit."
You will be directed to a page where you can reset your password.
 Once you have successfully reset your password, click on "Submit."
You can now log in to your account using your new credentials.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Homepage
            </Heading>
            <Text color={'#cfcece'}>
            Upon logging in to the app, you will be directed to the Homepage, the central hub of the Mula Membership App. Discover and access a range of features designed to enhance your learning experience and facilitate effortless navigation:

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
             Create An Account
            </Heading>
            <Text color={'#cfcece'}>
            To join Mula Membership, complete the registration process by following these steps:
On the home screen, find and click on the "Sign Up" button.
Enter your email address, which will be used for account verification. A one-time password (OTP) will be sent to this email.
Select a unique username, preferably one that hasn't been used before by another user.
 Create a strong, alphanumeric password for your account.
 Check your email inbox for the OTP. Enter this OTP in the app to verify your email.
 Once you've entered all required details, click on "Sign Up" to complete the registration process.
            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Enrolled Courses:
            </Heading>
            <Text color={'#cfcece'}>
            Beneath the search tab, a carousel view displays your enrolled courses, providing easy access to your ongoing learning journey.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Recommended           
             </Heading>
            <Text color={'#cfcece'}>
            Further down, the "Recommended" section curates courses based on your interests, enhancing your learning journey by suggesting content aligned with your preferences. Click on "View All" to explore a comprehensive list of available courses recommended just for you.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Notifications
            </Heading>
            <Text color={'#cfcece'}>
            Stay informed and up-to-date with important notifications related to your courses, app features, and more. The Notifications section, represented by a bell icon in the bottom left corner, ensures you never miss out on crucial updates within the Mula Membership App:

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Course Notifications
            </Heading>
            <Text color={'#cfcece'}>
            Receive updates about your enrolled courses, including announcements and course-specific information.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
                Video Uploads Notification
            </Heading>
            <Text color={'#cfcece'}>
            Get notified when new videos are uploaded, ensuring you're always aware of fresh content.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Plan Upgrade:
            </Heading>
            <Text color={'#cfcece'}>
            Stay informed about upgrades or changes to your subscription plan.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            New Services & App Functionalities
            </Heading>
            <Text color={'#cfcece'}>
            Discover important information about new services and app functionalities.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Service Updates:
            </Heading>
            <Text color={'#cfcece'}>
            Receive updates about changes or improvements to existing services.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            App Version Update:
            </Heading>
            <Text color={'#cfcece'}>
            Stay informed about app version updates, ensuring you have the latest features and enhancements.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Chat & Announcements

            </Heading>
            <Text color={'#cfcece'}>
            The Chat & Announcement section next to the notification icon, facilitates access to group announcements and group chats. Stay connected with fellow members, engage in insightful conversations, and receive important updates from the Mula Membership community.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            My Courses

            </Heading>
            <Text color={'#cfcece'}>
            The "My Courses" section, located next to the Homepage, provides an overview of all the courses you have enrolled in since joining the app, including your progress and completion status:

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Course List
            </Heading>
            <Text color={'#cfcece'}>
            View a comprehensive list of all the courses you have enrolled in, displaying relevant details such as course name and instructor.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Progress Tracking
            </Heading>
            <Text color={'#cfcece'}>
            Track your progress for each course, depicted by a percentage completion status. Easily identify courses that are completed or those you are currently engaged with.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Course Details
            </Heading>
            <Text color={'#cfcece'}>
            Access detailed information about each course, including the course outline, modules, and any additional resources provided.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Profile
            </Heading>
            <Text color={'#cfcece'}>
            The "Profile" section, located at the bottom right of the screen, allows you to access and manage your personal information within the Mula Membership app. Here, you can view your profile details and make any necessary updates or edits.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Edit Profile
            </Heading>
            <Text color={'#cfcece'}>
            If you need to view or make changes to your account details, you can easily do so by following these steps:
Tap on the Profile icon, which is located at the bottom right of your screen.
 In the top right corner of your screen, you will find an edit option. Click on it.
 You can now update the desired fields with the new information.
 Once you have made the necessary changes, click on "Update" to save your updated account details.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
             All Courses
     
            </Heading>
            <Text color={'#cfcece'}>
            Explore a vast array of courses available within the Mula Membership app, carefully categorized for your convenience. From Digital Marketing to Web 3.0, find the courses that align with your entrepreneurial aspirations and learning objectives.


            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
                 Accessing All Courses:
            </Heading>
            <Text color={'#cfcece'}>
            Click on the menu icon located at the top right corner of the page to unveil a dropdown menu.
 From the dropdown menu, choose "All Courses" to be redirected to the All Courses page.

            </Text>
           
           
            <Heading fontSize={'30px'} color={'#fff'}>
            Subscription Plans
            </Heading>
            <Text color={'#cfcece'}>
            Explore the range of membership plans available within the Mula Membership app. Learn about the various options tailored to suit your needs and preferences:
Explore the range of membership plans available within the Mula Membership app to elevate your entrepreneurial learning experience. Discover the various options tailored to suit your needs and preferences.


            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            To Buy a Course:
            </Heading>
            <Text color={'#cfcece'}>
            Scroll through the list of available courses, categorized under different sections like Digital Marketing and Web 3.0. To buy a course, follow these steps:
Click on the course you wish to learn more about and potentially purchase.
View course details, including the course description and price.
 Click the "Get Started" button to add the course to your cart.
On the cart page, select "Buy Now" to initiate the purchase process.
You will be directed to the payment page where you can securely add your card details and finalize the course purchase.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
                   Accessing Subscription Plans
            </Heading>
            <Text color={'#cfcece'}>
            Click on the menu icon located at the top right corner of the page to access the dropdown menu.
 Choose "Subscription Plans" from the dropdown menu to be redirected to the Subscription Plans page.


            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
              To Buy a Plan:
            </Heading>
            <Text color={'#cfcece'}>
            Explore the available membership plans to determine the features, benefits, and pricing associated with each plan.
Identify the plan that is currently activated for your account.
To buy a plan, click on “Buy Now” option with the subscription plan. You will be asked to remove the previous plan from the cart.
After doing so, proceed with your payment to upgrade to a different subscription plan.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Membership Portal

            </Heading>
            <Text color={'#cfcece'}>
            The membership portal is where you can access exclusive content, resources, and features based on your subscription level. To access your membership portal:
Click on the menu icon located at the top right corner of the page to access the dropdown menu.
Choose "Membership Portal" from the dropdown menu to be redirected to the Membership Portal.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            My Videos
            </Heading>
            <Text color={'#cfcece'}>
            Access all the video content associated with the courses you've enrolled in within the Mula Membership app. To find your videos, follow these easy steps:
Click on the menu icon located at the top right corner of the page to reveal the dropdown menu.
Choose "My Videos" from the dropdown menu to be directed to the My Videos page, where all video content will be available.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Cart
            </Heading>
            <Text color={'#cfcece'}>
            Manage and review all the courses and subscription plans you've added to your cart in one convenient section within the Mula Membership app. To view your cart, follow these simple steps:
Click on the menu icon located at the top right corner of the page to access the dropdown menu.
Choose "Cart" from the dropdown menu to be redirected to the Cart page, where your selected items are compiled.


            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Refer & Earn
            </Heading>
            <Text color={'#cfcece'}>
            Participate in the Mula Membership referral program and unlock rewards and benefits by referring friends and acquaintances to our platform. Share the entrepreneurial learning journey with others and enjoy the perks of our referral program.
Click on the menu icon located at the top right corner of the page to access the dropdown menu.
Choose "Refer & Earn" from the dropdown menu to be redirected to the Refer & Earn page.
Obtain your unique referral link to share with potential new members.
Share the link with friends, colleagues, or anyone interested in enhancing their entrepreneurial skills.
Receive rewards or benefits when your referrals sign up or make a purchase through your referral link. Your referral income will be displayed on this page as well.


            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Help Center
            </Heading>
            <Text color={'#cfcece'}>
            The Help Center is your destination for assistance, guidance, and answers to frequently asked questions within the Mula Membership app. If you encounter any challenges, have inquiries, or need support, this section is here to provide the necessary help and resources.
Click on the menu icon located at the top right corner of the page to reveal the dropdown menu.
Choose "Help Center" from the dropdown menu to access information and support.
You'll find the following dedicated sections to assist you effectively: 

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Support
            </Heading>
            <Text color={'#cfcece'}>
            To provide assistance and resolve any issues you may encounter while using our app.


            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Share Link
            </Heading>
            <Text color={'#cfcece'}>
            Obtain the link for sharing the app with friends and acquaintances.
            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Go to Website
            </Heading>
            <Text color={'#cfcece'}>
            This allows you to conveniently find our website for additional information, updates, and resources related to our app and offerings.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            FAQs
            </Heading>
            <Text color={'#cfcece'}>
            Frequently Asked Questions (FAQs) provide detailed answers to common queries.
            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Settings
            </Heading>
            <Text color={'#cfcece'}>
            The "Settings" section allows you to personalize and manage your account settings within the Mula Membership app.
Click on the menu icon located at the top right corner of the page to unveil the dropdown menu.
Choose "Settings" from the dropdown menu to access your account settings.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Delete Account

            </Heading>
            <Text color={'#cfcece'}>
            If you ever need to delete your account, simply follow these steps:
Click on the Menu icon, located at the top right of your screen.
Select "Settings" from the dropdown menu.
Within the settings page, find and click on "Delete Account."
The app will prompt you with a confirmation message to ensure you want to proceed with the account deletion. If you are certain, click on "Delete Account."
Your account will then be permanently deleted.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Notification Settings
            </Heading>
            <Text color={'#cfcece'}>
            If you wish to customize your notification preferences or choose your preferred method of receiving notifications (email or phone), you can easily do so by following these steps:
Click on the Menu icon, located at the top right corner of your screen.
From the dropdown menu, find and select the "Settings" option.
Within the settings page, find and select the "Notification Settings" option.
 In the notification settings menu, you can make the desired changes to your notification settings.

            </Text>
            <Heading fontSize={'30px'} color={'#fff'}>
            Logout
            </Heading>
            <Text color={'#cfcece'}>
            If you need to log out of your account, the following steps will guide you through the process:
Click on the menu icon, located at the top right corner of your screen.
From the drop-down menu, find the "Logout" option at the bottom.
Once you have located the "Logout" option, simply click on it to initiate the logout process. This action will securely sign you out of your account.


            </Text>
          </Stack>
        </Container>
        <Banner />
        <Footer />
      </Stack>
    </div>
  );
}

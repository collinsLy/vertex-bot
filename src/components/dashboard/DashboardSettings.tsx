
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { AlertCircle, Check, User, KeyRound, BellRing } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
});

const passwordFormSchema = z.object({
  currentPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  newPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string(),
}).refine(
  (data) => data.newPassword === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type PasswordFormValues = z.infer<typeof passwordFormSchema>;

const DashboardSettings = () => {
  const { user, updateUserInfo } = useAuth();
  const [isProfileSubmitting, setIsProfileSubmitting] = useState(false);
  const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      phone: "",
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onProfileSubmit = (values: ProfileFormValues) => {
    setIsProfileSubmitting(true);
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      updateUserInfo({
        name: values.name,
        email: values.email,
      });
      
      setIsProfileSubmitting(false);
      setProfileSuccess(true);
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setProfileSuccess(false);
      }, 3000);
    }, 1500);
  };

  const onPasswordSubmit = (values: PasswordFormValues) => {
    setIsPasswordSubmitting(true);
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      // For demo, we'll check if current password is "password123"
      if (values.currentPassword === "password123") {
        setIsPasswordSubmitting(false);
        setPasswordSuccess(true);
        passwordForm.reset();
        
        // Reset success message after 3 seconds
        setTimeout(() => {
          setPasswordSuccess(false);
        }, 3000);
      } else {
        setIsPasswordSubmitting(false);
        setPasswordError(true);
        
        // Reset error message after 3 seconds
        setTimeout(() => {
          setPasswordError(false);
        }, 3000);
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="bg-white/5">
          <TabsTrigger value="profile" className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="password" className="flex items-center">
            <KeyRound className="w-4 h-4 mr-2" />
            Password
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center">
            <BellRing className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </CardHeader>
            <CardContent>
              {profileSuccess && (
                <Alert className="mb-6 border-green-500 bg-green-500/10">
                  <Check className="h-4 w-4 text-green-500" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your profile information has been updated successfully.
                  </AlertDescription>
                </Alert>
              )}
              
              <Form {...profileForm}>
                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                  <FormField
                    control={profileForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={profileForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                    disabled={isProfileSubmitting}
                  >
                    {isProfileSubmitting ? "Updating..." : "Update Profile"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="password">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent>
              {passwordSuccess && (
                <Alert className="mb-6 border-green-500 bg-green-500/10">
                  <Check className="h-4 w-4 text-green-500" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Your password has been updated successfully.
                  </AlertDescription>
                </Alert>
              )}
              
              {passwordError && (
                <Alert className="mb-6" variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Current password is incorrect. Please try again.
                  </AlertDescription>
                </Alert>
              )}
              
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-6">
                  <FormField
                    control={passwordForm.control}
                    name="currentPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Your current password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={passwordForm.control}
                    name="newPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>New Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Your new password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm New Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Confirm your new password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-sm text-white/70 p-3 bg-white/5 rounded-lg mb-2">
                    <p className="font-medium mb-1">Password Requirements:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>At least 6 characters long</li>
                      <li>Include at least one number</li>
                      <li>Include at least one special character</li>
                    </ul>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                    disabled={isPasswordSubmitting}
                  >
                    {isPasswordSubmitting ? "Updating..." : "Change Password"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage your notification preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Updates</h3>
                    <p className="text-sm text-white/70">Receive updates about your account via email</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="email-updates"
                      type="checkbox"
                      className="w-4 h-4 accent-[#F2FF44]"
                      defaultChecked
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <h3 className="font-medium">Bot Updates</h3>
                    <p className="text-sm text-white/70">Receive notifications when your bots have updates</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="bot-updates"
                      type="checkbox"
                      className="w-4 h-4 accent-[#F2FF44]"
                      defaultChecked
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <h3 className="font-medium">New Bot Notifications</h3>
                    <p className="text-sm text-white/70">Receive notifications when new bots are available</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="new-bots"
                      type="checkbox"
                      className="w-4 h-4 accent-[#F2FF44]"
                      defaultChecked
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <div>
                    <h3 className="font-medium">Promotion Emails</h3>
                    <p className="text-sm text-white/70">Receive emails about promotions and special offers</p>
                  </div>
                  <div className="flex items-center h-5">
                    <input
                      id="promotions"
                      type="checkbox"
                      className="w-4 h-4 accent-[#F2FF44]"
                    />
                  </div>
                </div>
                
                <Button 
                  className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] mt-4"
                  onClick={() => toast.success("Notification settings saved")}
                >
                  Save Preferences
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardSettings;

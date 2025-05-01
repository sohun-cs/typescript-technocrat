{
   // spread operator
   // rest operator
   // destructuring

   const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
   const bros2: string[] = ['Tanmoy', 'Nahid', 'Rahat']

   bros1.push(...bros2);
   //console.log(bros1);


   const mentors1 = {
      typescript: 'Mezba',
      redux: 'Mir',
      dbms: 'Mizan',
   }

   const mentors2 = {
      prisma: 'Firoz',
      next: 'Tanmoy',
      cloud: 'Nahid',
   }


   const mentorList = {
      ...mentors1,
      ...mentors2
   }

   //console.log(mentorList);



   // learn rest operators

   // Wrong Practice
   // const greetFriends = (friend1:string, friend2:string, friend3:string) => {
   //    console.log(`Hi ${friend1} ${friend2} ${friend3}`);
   // }

   // Rest Operator
   const greetFriends = (...friends: string[]) => {
      friends.forEach((friend: String) => {
         console.log(`Hi ${friend}`);
      });
   }

   greetFriends("Abul", "Kabul", "Babul", "Ubul", "Labul")



}
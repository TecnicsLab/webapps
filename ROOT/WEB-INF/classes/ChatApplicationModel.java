
/*  ------ CHAT ROOM Web Based Application devloped in TECNICS lab on 6-8-2015 -------------- */



package Chat;
import java.io.*;
import java.util.*;
import java.sql.*;
import java.util.Arrays;

public class ChatApplicationModel
{
	public static Statement statement=null;
	public static ResultSet result=null;
	public static Connection connect=null;
	public static PreparedStatement preparestmnt=null;
	public static boolean status=false;
	public static boolean found=false;
	public static String query;	
	public static String userid; 
	public static String password;
	public static String username;
	public static int slnum;
	public static String textdate;
	public static String texttime;
	public static String textmsg;
	public static int message=0;
	public ChatApplicationModel()throws Exception
	{
		Class.forName("com.mysql.jdbc.Driver");
		connect=DriverManager.getConnection("jdbc:mysql://10.0.0.6:3306/DBTextMe","mounika","tecnics");
		statement=connect.createStatement();	
	}
	public static int registerWithChatRoomDB(String id,String pwd,String uname) throws Exception
	{
		query="select * from tblTextMeUser where UserId='"+id+"'";
		preparestmnt=connect.prepareStatement(query);
		result=preparestmnt.executeQuery();
		found=result.next();
		if(found)
		{
			message=0;
		}
		else
		{
			query="insert into tblTextMeUser values('"+id+"','"+pwd+"','"+uname+"')";
			statement.executeUpdate(query);
			message=1;
		}	
		return message;	
	}
	public static Boolean loginValidationWithChatRoomDB(String id,String pwd) throws Exception
	{
		status=false;
		query="select * from tblTextMeUser where UserId='"+id+"' and Password='"+pwd+"'";
		preparestmnt=connect.prepareStatement(query);
		result=preparestmnt.executeQuery();
		status=result.next();
		return status;	
	}
	public ArrayList<String> showHistoryOfChatRoomDB() throws Exception
	{
		String get_name="",get_msg="",get_time="",get_date="";
		ArrayList<String> list = new ArrayList<String>();
		query="select UserName,TextMsg,TextTime,TextDate from viewtextme";
		preparestmnt=connect.prepareStatement(query);
		result=preparestmnt.executeQuery();
		while(result.next())
		{
			get_name=result.getString(1);
			get_msg=result.getString(2);
			get_time=result.getString(3);
			get_date=result.getString(4);
			list.add(get_name+","+get_msg+","+get_time+","+get_date);
		}
		return list;
		// return get_name+","+get_msg+","+get_time+","+get_date;
	}
	public ArrayList<String> sendMsgIntoChatRoomDB(String id,String msg) throws Exception
	{
		String get_name="",get_msg="",get_time="",get_date="";
		ArrayList<String> list = new ArrayList<String>();
		query="insert into tblTextMeText(UserId,TextMsg,TextTime,TextDate) values ('"+id+"','"+msg+"',curtime(),curdate())";
		statement.executeUpdate(query);
		query="select UserName,TextMsg,TextTime,TextDate from viewtextme where UserId='"+id+"'";
		preparestmnt=connect.prepareStatement(query);
		result=preparestmnt.executeQuery();
		while(result.next())
		{
			get_name=result.getString(1);
			get_msg=result.getString(2);
			get_time=result.getString(3);
			get_date=result.getString(4);
			list.add(get_name+","+get_msg+","+get_time+","+get_date);
		}
		return list;
		// return "inserted successfully";
	}
	// public String displayMessage(String name) throws SQLException, IOException
	// {
	// 	String name1="",data="",time="",date="";
	// 	String query="select tblTextMeUser.UserName,tblTextMeText.TextData,tblTextMeText.TextTime,tblTextMeText.TextDate from tblTextMeUser,tblTextMeText where tblTextMeText.UserId=tblTextMeUser.UserId and tblTextMeUser.UserName='"+name+"'";
	// 	PreparedStatement ps=con.prepareStatement(query);
	// 	r=ps.executeQuery();
	// 	while(r.next())
	// 	{
	// 		name1=r.getString(1);
	// 		data=r.getString(2);
	// 		time=r.getString(3);
	// 		date=r.getString(4);
	// 	}
	// 	return name1+"\n"+data+"\n"+time+"\t"+date;
	// }

	/*public static ArrayList<ChatApplication> registration()throws SQLException, IOException{
		ArrayList<ChatApplication> list = new ArrayList<ChatApplication>(); 
		query="insert into tblTextMeUser values()";
		r=s.executeUpdate(query);
		query="select * from tblTextMeUser t1,tblTextMeText t2 where t1.UserId=t2.UserId";
		r=s.executeQuery(query);
		while(r.next()){
			userid=r.getString("User_Id");
			password=r.getString("Password");	
			username=r.getString("username");

			list.add(new ChatApplication(id,dos,status));
		} 
		return list;		

		} 
	
	}*/
	
}





/*class ChatApplicationMain // Ashok Main
{
	public static void main(String args[]) throws Exception{

		ChatApplicationModel cam=new ChatApplicationModel();
		//ArrayList<ChatApplication> temp=new ArrayList<ChatApplication>();
		String p="Kumar";
		String id="John@tm.com";
		//String temp=cam.register(p,p,p);
		String temp2=cam.saveMsg(p,id);
		//for(ChatApplication ca:temp){
		//System.out.println(temp);
		System.out.println(temp2);						
	}
	
}*/
// public class ChatApplicationMain // Monica Main
// {
// 	public static void main(String args[]){
// 		try
// 		{
// 		ChatApplicationModel cam=new ChatApplicationModel();
// 		String i="1";
// 		String p="p";
// 		String u="u";
// 		String id="John@tm.com";
// 		String data="hai";
// 		// ArrayList<ChatApplication> temp=new ArrayList<ChatApplication>();
// 		String temp=cam.register(i,p,u);
// 		// for(ChatApplication ca:temp){
// 			System.out.println(temp);		
// 			boolean status=cam.login(i,p);
// 			System.out.println(status);
// 			String t1=cam.InsertMessage(id,data);
// 			System.out.println(t1);

// 		// }
// 		}
// 		catch(Exception e)
// 		{
// 			System.out.print(e);
// 		}
// 	}
// }








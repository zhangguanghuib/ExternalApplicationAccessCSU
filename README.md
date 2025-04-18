# Call CSU server API from external application step by step.
# Background: 
#### CSU Server API can not only consumed by Microsoft D365 Store Commerce but also Microsoft D365 e-Commerce, but also it is accessible for external application,  this article provided the step by step to show you how to configure to enable the CSU API accessible by external third-party application.
#### Refer to this Microsoft document though some content out-of-dated: https://learn.microsoft.com/en-us/dynamics365/commerce/dev-itpro/consume-retail-server-api

#### Azure Portal Configuration Steps
1. Log in to Azure Portal, and go to App Registrations, and <mark>New registration<Mark> to create App Registration for Retail Server(CSU), and follow the document <br/>
   ![image](https://github.com/user-attachments/assets/e56d679c-9cd1-446f-8820-26e5aae30dae) <br/>
   ![image](https://github.com/user-attachments/assets/2e7f6282-af38-411b-b63a-5a8deacb53bf) <br/>
   ![image](https://github.com/user-attachments/assets/af619599-f194-4e58-932a-8a35eb52a625)  <br/>
   ![image](https://github.com/user-attachments/assets/e48384db-1bc1-4130-bc4b-50dc89370c9b)
2. Create the app registration for the client<br/>
   ![image](https://github.com/user-attachments/assets/0fd878a9-ae19-4498-81de-31567e583462)<br/>
   ![image](https://github.com/user-attachments/assets/432c7f55-6c6c-4f71-98a2-95a4d3f6c280)<br/>
   ![image](https://github.com/user-attachments/assets/b8b54399-1203-4813-9350-aa8c5d9143e9)<br/>
3. Create client secret:<br/>
   ![image](https://github.com/user-attachments/assets/591ae3b2-a10e-4614-9ddd-1745d65ccb18)<br/>
   ![image](https://github.com/user-attachments/assets/075b03b6-b588-4aba-9269-6eb43690596a)<br/>
   Copy the Secret Value since it will only shown once.
4. Config "Commerce Shared Parameters": <br/>
   ![image](https://github.com/user-attachments/assets/0cf5cd60-3535-4d4a-96e4-54e817c550a8)

5. Create a .net Core Console application, with these configuration<br/>
```xml
<?xml version="1.0" encoding="utf-8" ?>
<configuration>
  <appSettings>
    <!-- CSU Client Application Client Id -->
    <add key="aadClientId" value="{CSU Client Application Client Id}" />
    <!-- CSU Client Application Secret Value,not Secret Id  -->
    <add key="aadClientSecret" value="{CSU Client Application Client Secret Value}" />
    <!-- aadAuthority: https://sts.windows.net/{tenantId} -->
    <add key="aadAuthority" value="https://sts.windows.net/{tenantId}/" />
    <!-- CSU (Retail Server URL) -->
    <add key="retailServerUrl" value="https://{CSU Server Host}:{Port}/RetailServer/Commerce" />
    <!-- CSU Server App Client Id -->
    <add key="resource" value="api://{ CSU Server App Client Id}" />
    <!-- Store's Operating Unit Id -->
    <add key="operatingUnitNumber" value="{Store's Operating Unit Id}" />
    <!-- SA Srinath. -->
    <!-- authority, that is a fixed value -->
    <add key="authority" value="https://login.microsoftonline.com/"/>
    <!-- tenantId -->
    <add key="tenantId"  value="{tenantid}"/>
    <!-- CSU Server App Client Id -->
    <add key="audience"   value= "api://{CSU Server App Client Id}" />
  </appSettings>
</configuration>
```


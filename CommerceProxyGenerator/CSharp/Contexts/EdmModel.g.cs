// <auto-generated />
  namespace Contoso.Commerce.RetailProxy.Extension
  {
  using System.CodeDom.Compiler;
  using System.IO;
  using System.Xml;

    /// <summary>
    /// Represents the EDM model.
    /// </summary>
    [GeneratedCodeAttribute("Contoso.Commerce.RetailProxy.Extension", "1.0")]
    public class EdmModel: Microsoft.Dynamics.Commerce.RetailProxy.IEdmModelExtension
    {
        private static string edmx = "<edmx:Edmx Version=\"4.0\" xmlns:edmx=\"http://docs.oasis-open.org/odata/ns/edmx\">\r\n" +
    "  <edmx:DataServices>\r\n    <Schema Namespace=\"Microsoft.Dynamics.Retail.RetailSe" +
    "rverLibrary\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\r\n      <Action Nam" +
    "e=\"OverrideCartLinePrice\">\r\n        <Parameter Name=\"cartId\" Type=\"Edm.String\" /" +
    ">\r\n        <Parameter Name=\"lineId\" Type=\"Edm.String\" />\r\n        <Parameter Nam" +
    "e=\"newPrice\" Type=\"Edm.Decimal\" Nullable=\"false\" />\r\n        <ReturnType Type=\"M" +
    "icrosoft.Dynamics.Commerce.Runtime.DataModel.Cart\" />\r\n      </Action>\r\n      <A" +
    "ction Name=\"CreateExampleEntity\" IsBound=\"true\">\r\n        <Parameter Name=\"bindi" +
    "ngParameter\" Type=\"Collection(Contoso.CommerceRuntime.DataModel.ExampleEntity)\" " +
    "/>\r\n        <Parameter Name=\"entityData\" Type=\"Contoso.CommerceRuntime.DataModel" +
    ".ExampleEntity\" />\r\n        <ReturnType Type=\"Edm.Int64\" Nullable=\"false\" />\r\n  " +
    "    </Action>\r\n      <Action Name=\"UpdateExampleEntity\" IsBound=\"true\">\r\n       " +
    " <Parameter Name=\"bindingParameter\" Type=\"Contoso.CommerceRuntime.DataModel.Exam" +
    "pleEntity\" />\r\n        <Parameter Name=\"updatedEntity\" Type=\"Contoso.CommerceRun" +
    "time.DataModel.ExampleEntity\" />\r\n        <ReturnType Type=\"Edm.Boolean\" Nullabl" +
    "e=\"false\" />\r\n      </Action>\r\n      <Action Name=\"DeleteExampleEntity\" IsBound=" +
    "\"true\">\r\n        <Parameter Name=\"bindingParameter\" Type=\"Contoso.CommerceRuntim" +
    "e.DataModel.ExampleEntity\" />\r\n        <ReturnType Type=\"Edm.Boolean\" Nullable=\"" +
    "false\" />\r\n      </Action>\r\n      <Function Name=\"GetAllExampleEntities\" IsBound" +
    "=\"true\">\r\n        <Parameter Name=\"bindingParameter\" Type=\"Collection(Contoso.Co" +
    "mmerceRuntime.DataModel.ExampleEntity)\" />\r\n        <ReturnType Type=\"Collection" +
    "(Contoso.CommerceRuntime.DataModel.ExampleEntity)\" />\r\n      </Function>\r\n      " +
    "<Action Name=\"SimplePingPost\">\r\n        <ReturnType Type=\"Edm.Boolean\" Nullable=" +
    "\"false\" />\r\n      </Action>\r\n      <Action Name=\"GetOnlineShoppingCartList\">\r\n  " +
    "      <ReturnType Type=\"Collection(Microsoft.Dynamics.Commerce.Runtime.DataModel" +
    ".Cart)\" />\r\n      </Action>\r\n      <Action Name=\"GetCartById\">\r\n        <Paramet" +
    "er Name=\"id\" Type=\"Edm.String\" />\r\n        <ReturnType Type=\"Microsoft.Dynamics." +
    "Commerce.Runtime.DataModel.Cart\" />\r\n      </Action>\r\n      <Action Name=\"Search" +
    "InventoryDocumentLine\">\r\n        <Parameter Name=\"searchCriteria\" Type=\"Microsof" +
    "t.Dynamics.Commerce.Runtime.DataModel.InventoryDocumentLineSearchCriteria\" />\r\n " +
    "       <ReturnType Type=\"Collection(Microsoft.Dynamics.Commerce.Runtime.DataMode" +
    "l.InventoryInboundOutboundDocumentLine)\" />\r\n      </Action>\r\n      <Function Na" +
    "me=\"SimplePingGet\">\r\n        <ReturnType Type=\"Edm.Boolean\" Nullable=\"false\" />\r" +
    "\n      </Function>\r\n      <EntityContainer Name=\"CommerceContext\">\r\n        <Ent" +
    "itySet Name=\"BoundController\" EntityType=\"Contoso.CommerceRuntime.DataModel.Exam" +
    "pleEntity\" />\r\n        <ActionImport Name=\"SimplePingPost\" Action=\"Microsoft.Dyn" +
    "amics.Retail.RetailServerLibrary.SimplePingPost\" />\r\n        <ActionImport Name=" +
    "\"OverrideCartLinePrice\" Action=\"Microsoft.Dynamics.Retail.RetailServerLibrary.Ov" +
    "errideCartLinePrice\" EntitySet=\"Carts\" />\r\n        <ActionImport Name=\"GetOnline" +
    "ShoppingCartList\" Action=\"Microsoft.Dynamics.Retail.RetailServerLibrary.GetOnlin" +
    "eShoppingCartList\" EntitySet=\"Carts\" />\r\n        <ActionImport Name=\"GetCartById" +
    "\" Action=\"Microsoft.Dynamics.Retail.RetailServerLibrary.GetCartById\" EntitySet=\"" +
    "Carts\" />\r\n        <ActionImport Name=\"SearchInventoryDocumentLine\" Action=\"Micr" +
    "osoft.Dynamics.Retail.RetailServerLibrary.SearchInventoryDocumentLine\" />\r\n     " +
    "   <FunctionImport Name=\"SimplePingGet\" Function=\"Microsoft.Dynamics.Retail.Reta" +
    "ilServerLibrary.SimplePingGet\" IncludeInServiceDocument=\"true\" />\r\n      </Entit" +
    "yContainer>\r\n    </Schema>\r\n    <Schema Namespace=\"Contoso.CommerceRuntime.DataM" +
    "odel\" xmlns=\"http://docs.oasis-open.org/odata/ns/edm\">\r\n      <EntityType Name=\"" +
    "ExampleEntity\">\r\n        <Key>\r\n          <PropertyRef Name=\"UnusualEntityId\" />" +
    "\r\n        </Key>\r\n        <Property Name=\"IntData\" Type=\"Edm.Int32\" Nullable=\"fa" +
    "lse\" />\r\n        <Property Name=\"StringData\" Type=\"Edm.String\" />\r\n        <Prop" +
    "erty Name=\"UnusualEntityId\" Type=\"Edm.Int64\" Nullable=\"false\" />\r\n        <Prope" +
    "rty Name=\"ExtensionProperties\" Type=\"Collection(Microsoft.Dynamics.Commerce.Runt" +
    "ime.DataModel.CommerceProperty)\" />\r\n      </EntityType>\r\n    </Schema>\r\n  </edm" +
    "x:DataServices>\r\n</edmx:Edmx>";
        private static string apiVersion = "7.3";
        private static System.Collections.Generic.Dictionary<System.Type, string> proxyTypeToRuntimeTypeNameMap = new System.Collections.Generic.Dictionary<System.Type, string>()
        {
        
            { typeof(Contoso.Commerce.RetailProxy.Extension.ExampleEntity), "Contoso.CommerceRuntime.DataModel.ExampleEntity" }
        };
        private static System.Collections.Generic.Dictionary<string, System.Type> runtimeTypeNameToProxyTypeMap = new System.Collections.Generic.Dictionary<string, System.Type>()
        {
        
            { "Contoso.CommerceRuntime.DataModel.ExampleEntity", typeof(Contoso.Commerce.RetailProxy.Extension.ExampleEntity) }
        };
        
        /// <summary>
        /// Gets the EDMX string.
        /// </summary>
        public string Edmx
        {
            get
            {
                return edmx;
            }
        }

        /// <summary>
        /// Gets the matched Retail Server API version.
        /// </summary>
        public string ApiVersion
        {
            get
            {
                return apiVersion;
            }
        }
        
        /// <summary>
        /// Gets the map from retail proxy type to commerce runtime type names.
        /// </summary>
        public System.Collections.Generic.Dictionary<System.Type, string> ProxyTypeToRuntimeTypeNameMap
        {
            get { return proxyTypeToRuntimeTypeNameMap; }
        }

        /// <summary>
        /// Gets the map from commerce runtime type names to retail proxy type.
        /// </summary>
        public System.Collections.Generic.Dictionary<string, System.Type> RuntimeTypeNameToProxyTypeMap
        {
            get { return runtimeTypeNameToProxyTypeMap; }
        }
    }
}

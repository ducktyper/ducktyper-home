namespace ducktyper_home.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddBodyToProjects : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Projects", "Body", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Projects", "Body");
        }
    }
}

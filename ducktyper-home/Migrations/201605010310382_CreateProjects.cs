namespace ducktyper_home.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CreateProjects : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Projects",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        Details = c.String(),
                        Link = c.String(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Projects");
        }
    }
}

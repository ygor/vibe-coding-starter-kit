using Xunit;

public class CreateTodoTests
{
    [Fact]
    public void Should_Create_Todo_When_Valid()
    {
        // Arrange
        var request = new CreateTodoRequest { Title = "Test", Description = "Sample" };
        var handler = new CreateTodo(); // This would normally inject dependencies

        // Act
        var result = handler.Handle(request);

        // Assert
        Assert.NotNull(result);
        Assert.Equal("Test", result.Title);
    }
}
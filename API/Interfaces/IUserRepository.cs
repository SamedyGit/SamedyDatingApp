using API.DTOs;
using API.Entities;
using API.Helper;

namespace API.Interfaces;

public interface IUserRepository
{
    void Update(AppUser user);
    Task<bool> SaveAllAsync();
    Task<IEnumerable<AppUser>> GetUserAsync();
    Task<AppUser?> GetUserByIdAsync(int id);
    Task<AppUser?> GetUserByUsernameAsync(string username);
    Task<PagedList<MemberDto>>GetMemberAsync(UserParams userParams);
    Task<MemberDto?> GetMemberAsync(string username);

}

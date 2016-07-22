using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/delegationLevel")]
    public class DelegationLevelController : ApiController
    {
        public DelegationLevelController(IDelegationLevelService delegationLevelService)
        {
            _delegationLevelService = delegationLevelService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(DelegationLevelAddOrUpdateResponseDto))]
        public IHttpActionResult Add(DelegationLevelAddOrUpdateRequestDto dto) { return Ok(_delegationLevelService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(DelegationLevelAddOrUpdateResponseDto))]
        public IHttpActionResult Update(DelegationLevelAddOrUpdateRequestDto dto) { return Ok(_delegationLevelService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<DelegationLevelDto>))]
        public IHttpActionResult Get() { return Ok(_delegationLevelService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(DelegationLevelDto))]
        public IHttpActionResult GetById(int id) { return Ok(_delegationLevelService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_delegationLevelService.Remove(id)); }

        protected readonly IDelegationLevelService _delegationLevelService;


    }
}

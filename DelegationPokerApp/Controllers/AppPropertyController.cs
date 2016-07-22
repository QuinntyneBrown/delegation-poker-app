using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/appProperty")]
    public class AppPropertyController : ApiController
    {
        public AppPropertyController(IAppPropertyService appPropertyService)
        {
            _appPropertyService = appPropertyService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(AppPropertyAddOrUpdateResponseDto))]
        public IHttpActionResult Add(AppPropertyAddOrUpdateRequestDto dto) { return Ok(_appPropertyService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(AppPropertyAddOrUpdateResponseDto))]
        public IHttpActionResult Update(AppPropertyAddOrUpdateRequestDto dto) { return Ok(_appPropertyService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<AppPropertyDto>))]
        public IHttpActionResult Get() { return Ok(_appPropertyService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(AppPropertyDto))]
        public IHttpActionResult GetById(int id) { return Ok(_appPropertyService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_appPropertyService.Remove(id)); }

        protected readonly IAppPropertyService _appPropertyService;


    }
}

using DelegationPokerApp.Dtos;
using DelegationPokerApp.Services;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Description;

namespace DelegationPokerApp.Controllers
{
    [Authorize]
    [RoutePrefix("api/digitalAsset")]
    public class DigitalAssetController : ApiController
    {
        public DigitalAssetController(IDigitalAssetService digitalAssetService)
        {
            _digitalAssetService = digitalAssetService;
        }

        [Route("add")]
        [HttpPost]
        [ResponseType(typeof(DigitalAssetAddOrUpdateResponseDto))]
        public IHttpActionResult Add(DigitalAssetAddOrUpdateRequestDto dto) { return Ok(_digitalAssetService.AddOrUpdate(dto)); }

        [Route("update")]
        [HttpPut]
        [ResponseType(typeof(DigitalAssetAddOrUpdateResponseDto))]
        public IHttpActionResult Update(DigitalAssetAddOrUpdateRequestDto dto) { return Ok(_digitalAssetService.AddOrUpdate(dto)); }

        [Route("get")]
        [AllowAnonymous]
        [HttpGet]
        [ResponseType(typeof(ICollection<DigitalAssetDto>))]
        public IHttpActionResult Get() { return Ok(_digitalAssetService.Get()); }

        [Route("getById")]
        [HttpGet]
        [ResponseType(typeof(DigitalAssetDto))]
        public IHttpActionResult GetById(int id) { return Ok(_digitalAssetService.GetById(id)); }

        [Route("remove")]
        [HttpDelete]
        [ResponseType(typeof(int))]
        public IHttpActionResult Remove(int id) { return Ok(_digitalAssetService.Remove(id)); }

        protected readonly IDigitalAssetService _digitalAssetService;


    }
}
